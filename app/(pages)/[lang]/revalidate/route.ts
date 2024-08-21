import { supportedLangs } from '@/app/lib/i18n';
import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  revalidatePath('/', 'layout');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
  });
};
