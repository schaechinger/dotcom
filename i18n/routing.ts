import { defineRouting } from 'next-intl/routing';

import { supportedLangs } from '@/app/config';

export const routing = defineRouting({
  locales: supportedLangs,
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
  },
  localeCookie: false,
});
