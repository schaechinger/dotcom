import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { supportedLangs } from '@app/config';
import { routing } from '@/i18n/routing';
import { matchLocale, splitPath } from '@lib/router';

const getLocale = (req: NextRequest) => {
  const headers = { 'accept-language': req.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();

  return matchLocale(languages);
};

export function middleware(request: NextRequest) {
  // Check for supported language code in path
  const { pathname } = request.nextUrl;
  const path = splitPath(pathname);
  const foundLang = supportedLangs.find((lang) => path.locale === lang);

  if (foundLang) {
    return createMiddleware(routing)(request);
  }

  const locale = getLocale(request);

  // Detect unknown language code
  if (/^[a-z]{2}$/.test(path.locale)) {
    // request.nextUrl.pathname = '/en/language';
    // request.nextUrl.search = `?lang=${pageLang}`;
    request.nextUrl.pathname = `/${locale}${path.page}`;
  } else {
    request.nextUrl.pathname = `/${locale}${pathname}`;
  }

  return NextResponse.redirect(request.nextUrl);
};

export const config = {
  matcher: [
    '/((?!_next/image|_next/static/|images/|api/|brandbook|revalidate|.*\\..*).*)',
  ],
};
