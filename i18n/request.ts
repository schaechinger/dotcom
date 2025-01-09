import 'server-only';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { supportedLangs } from '@app/config';
import { LocaleCode } from '@lib/router';

export default getRequestConfig(async (options) => {
  let locale = await options.requestLocale;
  if (!locale) {
    locale = await options.locale;
  }

  if (!supportedLangs.includes(locale as LocaleCode)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}`)).default,
  };
});
