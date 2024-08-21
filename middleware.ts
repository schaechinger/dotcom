import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { type LanguageCode, supportedLangs } from '@lib/i18n';

const getLocale = (req: NextRequest) => {
  const headers = { 'accept-language': req.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers }).languages();
  const genLocale = match(languages, supportedLangs, 'de');

  return genLocale as LanguageCode;
};

export default createMiddleware({
  locales: supportedLangs,
  defaultLocale: 'en',
});

// export function middleware(request: NextRequest) {

//   // Check for supported language code in path
//   const { pathname } = request.nextUrl;
//   const pageLang = pathname.split('/')[1].toLowerCase() || '';
//   const foundLang = supportedLangs.find((l) => pageLang === l);
//   request.headers.set('page-lang', pageLang);

//   const locale = getLocale(request);

//   if (foundLang) {
//     return createMiddleware({
//       // A list of all locales that are supported
//       locales: supportedLangs,

//       // Used when no locale matches
//       defaultLocale: locale,
//     });
//   }

//   // Detect unknown language code
//   if (/^[a-z]{2}$/.test(pageLang)) {
//     request.nextUrl.pathname = '/en/language';
//     request.nextUrl.search = `?lang=${pageLang}`;
//   } else {
//     request.nextUrl.pathname = `/${locale}${pathname}`;
//   }

//   return NextResponse.redirect(request.nextUrl);
// };

export const config = {
  matcher: [
    '/((?!_next|images|favicon.ico|apple-icon.png|robots.txt|humans.txt|sitemap.xml|manifest.webmanifest).*)',
  ],
};
