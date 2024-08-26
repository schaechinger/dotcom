import { NextResponse, type NextRequest } from 'next/server';
import { ZodError, z } from 'zod';

import { RECAPTCHA_SECRET_KEY } from '@app/config';
import { sendMessage } from '@lib/slack';

export type ContactFormState = {
  success: boolean;
  message?: string;
  field?: string;
};

const ContactMessage = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export const POST = async (req: NextRequest) => {
  let response: ContactFormState = {
    success: false,
    field: 'form',
  };

  if (!RECAPTCHA_SECRET_KEY) {
    return NextResponse.json(response);
  }

  try {
    const payload = await req.json();

    if (!payload.token) {
      return NextResponse.json(response);
    }

    const parsed = ContactMessage.parse({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });

    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${payload.token}`,
    }).then((res) => res.json());

    if (captchaResponse.success && 0.5 < captchaResponse.score) {
      const message = `Neue Kontakt-Anfrage: *${parsed.name}* (${parsed.email}):\n${parsed.message}`;

      await sendMessage(message);

      response = { success: true };
    }
  } catch (e) {
    if (e instanceof ZodError) {
      const [error] = e.errors;

      response.field = error.path[0] as string;
    }
  }

  return NextResponse.json(response);
};