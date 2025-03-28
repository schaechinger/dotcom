import Negotiator from 'negotiator'
import { type NextRequest, NextResponse } from 'next/server';

import { supportedLangs } from '@app/config';
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

  const locale = getLocale(request);

  if (foundLang) {
    return;
  }

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
    '/((?!_next/image|_next/images/|_next/static/|images/|api/|brandbook|revalidate|favicon.ico|apple-icon.png|robots.txt|humans.txt|sitemap.xml|manifest.webmanifest|sw.js).*)',
  ],
};
