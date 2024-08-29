import 'server-only';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { supportedLangs } from '@app/config';

export default getRequestConfig(async ({ locale }) => {
  if (!supportedLangs.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}`)).default,
  };
});
