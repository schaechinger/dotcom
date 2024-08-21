import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  revalidatePath('/', 'layout');

  return NextResponse.redirect(new URL('/', request.url));
};
