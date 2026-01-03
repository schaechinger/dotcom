import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { supportedLangs, WEB_HOST } from '@app/config';
import { resetCache } from '@lib/cache';

export const GET = () => {
  resetCache();

  revalidatePath('/', 'layout');
  revalidatePath('/robots.txt');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
    host: WEB_HOST,
    env: process.env.NODE_ENV,
  });
};
