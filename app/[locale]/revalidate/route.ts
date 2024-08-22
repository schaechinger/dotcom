import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { supportedLangs } from '@/i18n';

export const GET = () => {
  revalidatePath('/', 'layout');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
  });
};
