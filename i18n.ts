import { match } from '@formatjs/intl-localematcher'
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { WEB_HOST } from '@app/config';
import { isProd } from './app/utils';

export type LanguageCode = 'de' | 'en';

export const supportedLangs: LanguageCode[] = ['de', 'en'];

export const l = (identifier: string, lang: LanguageCode) => {
  const link = `/${[lang, ...identifier.split(/[\/\.]/g)]
    .filter((p) => !!p)
    .join('/')}`;

  return link.replace(/\/+$/, '') || '/';
};

export const matchLocale = (languages: readonly string[]) => (
  match(languages, supportedLangs, 'en') as LanguageCode
);

export const generatePageMeta = (identifier: string, locale: LanguageCode) => {
  const languages: Record<string, string> = {};
  supportedLangs.forEach((lang) => {
    languages[lang] = `${WEB_HOST}${l(identifier, lang)}`;
  });

  return {
    alternates: {
      canonical: languages[locale],
      languages,
    },
    robots: {
      index: isProd(),
    },
  };
};

export const splitPath = (pathname: string) => {
  const parts = pathname.split('/');
  const [locale] = parts.splice(1, 1);

  return {
    page: parts.join('/'),
    locale: locale.toLowerCase() as LanguageCode,
  };
};

export default getRequestConfig(async ({ locale }) => {
  if (!supportedLangs.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}`)).default,
  };
});
