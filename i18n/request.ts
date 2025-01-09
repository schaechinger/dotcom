import 'server-only';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { supportedLangs } from '@app/config';
import { LocaleCode } from '@lib/router';

export default getRequestConfig(async (options) => {
  const locale = await options.requestLocale || await options.locale;

  if (!supportedLangs.includes(locale as LocaleCode)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}`)).default,
  };
});
