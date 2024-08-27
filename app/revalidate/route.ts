import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

import { supportedLangs } from '@app/config';

export const GET = () => {
  revalidatePath('/', 'layout');
  revalidatePath('/robots.txt');
  revalidatePath('/robots');

  return NextResponse.json({
    success: true,
    languages: supportedLangs,
  });
};
