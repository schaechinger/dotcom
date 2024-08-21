import { supportedLangs } from '@/app/lib/i18n';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const GET = () => {
  revalidatePath('/', 'layout');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
  });
};
