import 'server-only';
import { notFound } from 'next/navigation';
import { hasLocale, type Formats } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { supportedLangs } from '@app/config';
import { LocaleCode } from '@lib/router';
import { routing } from './routing';

export const formats = {
  dateTime: {
    short: {
      month: '2-digit',
      year: 'numeric',
    },
    long: {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  },
  number: {
    precise: {
      maximumFractionDigits: 2,
    },
  },
  list: {
    enumeration: {
      style: 'long',
      type: 'conjunction',
    },
  },
} satisfies Formats;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as LocaleCode;

  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  if (!supportedLangs.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}`)).default,
  };
});
