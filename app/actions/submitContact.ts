'use server';

import { ZodError, z } from 'zod';
import { sendMessage } from '../lib/slack';

export interface ContactFormState {
  success: boolean;
  message?: string;
  field?: string;
}

const ContactMessage = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export const submitContact = async (state: Awaited<ContactFormState>, payload: FormData) => {
  try {
    const parsed = ContactMessage.parse({
      name: payload.get('name'),
      email: payload.get('email'),
      message: payload.get('message'),
    });

    const message = `Neue Kontakt-Anfrage: *${parsed.name}* (${parsed.email}):\n${parsed.message}`;

    await sendMessage(message);

    return { success: true };
  } catch (e) {
    if (e instanceof ZodError) {
      const [error] = e.errors;

      return { success: false, field: error.path[0] } as ContactFormState;
    } else {
      return { success: false, field: 'form' };
    }
  }
};
