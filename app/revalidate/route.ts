import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { supportedLangs, WEB_HOST } from '@app/config';

export const GET = () => {
  revalidatePath('/', 'layout');
  revalidatePath('/robots.txt');
  revalidatePath('/robots');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
    host: WEB_HOST,
    env: process.env.NODE_ENV,
  });
};
