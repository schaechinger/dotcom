import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { supportedLangs } from '@app/config';

export const routing = defineRouting({
  locales: supportedLangs,
  defaultLocale: 'en',
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);