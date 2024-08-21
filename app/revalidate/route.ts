import { revalidatePath } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  revalidatePath('/', 'layout');

  request.nextUrl.pathname = '/';

  return NextResponse.redirect(request.nextUrl);
};
