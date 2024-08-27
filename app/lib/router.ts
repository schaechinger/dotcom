import { match } from '@formatjs/intl-localematcher'
import { supportedLangs } from '@app/config';

export type LocaleCode = 'de' | 'en';

export const l = (identifier: string, locale: LocaleCode) => {
  const link = `/${[locale || 'en', ...identifier.split(/[\/\.]/g)]
    .filter((p) => !!p)
    .join('/')}`;

  return link.replace(/\/+$/, '') || '/';
};

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
