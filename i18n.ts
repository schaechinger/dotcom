import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { WEB_HOST } from '@app/config';

export type LanguageCode = 'de' | 'en';

export const supportedLangs: LanguageCode[] = ['de', 'en'];

export const l = (identifier: string, lang: LanguageCode) => {
  const link = `/${[lang, ...identifier.split(/[\/\.]/g)]
    .filter((p) => !!p)
    .join('/')}`;

  return link.replace(/\/+$/, '') || '/';
};

export const getPageAlternates = (identifier: string, lang: LanguageCode) => {
  const languages: Record<string, string> = {};
  supportedLangs.forEach((lang) => {
    languages[lang] = `${WEB_HOST}${l(identifier, lang)}`;
  });

  return {
    canonical: languages[lang],
    languages,
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
