import { WEB_HOST } from '@app/config';

export type LanguageCode = 'de' | 'en';

export const supportedLangs: LanguageCode[] = ['de', 'en'];

export const _l = (identifier: string, lang: LanguageCode) => {
  const link = `/${[lang, ...identifier.split(/[\/\.]/g)]
    .filter((p) => !!p)
    .join('/')}`;

  return link.replace(/\/+$/, '') || '/';
};

export const getPageAlternates = (identifier: string, lang: LanguageCode) => {
  const languages: Record<string, string> = {};
  supportedLangs.forEach((l) => {
    languages[l] = `${WEB_HOST}${_l(identifier, l)}`;
  });

  return {
    canonical: languages[lang],
    languages,
  };
};

const reduceTranslations = (translations: Record<string, string | unknown>, identifier: string) => {
  const parts = identifier.split('.');
  let context = translations;

  for (let i = 0; parts.length > i; i += 1) {
    if (undefined !== context[parts[i]]) {
      context = context[parts[i]] as unknown as Record<string, string>;
    } else {
      // identifier not found
      return null;
    }
  }

  return context;
};

export const loadTranslations = async (namespace: string, lang: LanguageCode) => {
  const translations = (await import(`../i18n/${lang}/`).then((t) => t.default));

  return reduceTranslations(translations, namespace) || {};
};

export const _t = (identifier: string, translations: Record<string, string | unknown>, lang: LanguageCode) => {
  const value = reduceTranslations(translations, identifier) || identifier;

  if ('string' === typeof value) {
    return value;
  }

  return (value || {})[lang] as string || identifier;
};
