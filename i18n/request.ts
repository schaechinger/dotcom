import 'server-only';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { supportedLangs } from '@app/config';
import { type LocaleCode } from '@lib/router';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale) {
    locale = 'en';
  }

  if (!supportedLangs.includes(locale as LocaleCode)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}`)).default,
  };
});
