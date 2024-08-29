import { match } from '@formatjs/intl-localematcher'
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { supportedLangs } from '@app/config';

export type LocaleCode = 'de' | 'en';


export const routing = defineRouting({
  locales: supportedLangs,
  defaultLocale: 'en',
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

export const matchLocale = (languages: readonly string[]) => (
  match(languages, supportedLangs, 'en') as LocaleCode
);

export const splitPath = (pathname: string) => {
  const parts = pathname.split('/');
  const [locale] = parts.splice(1, 1);

  return {
    page: parts.join('/'),
    locale: locale.toLowerCase() as LocaleCode,
  };
};
