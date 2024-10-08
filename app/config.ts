import { type LocaleCode } from '@lib/router';

import Briefcase from '@components/icons/Briefcase';
import Chemistry from '@components/icons/Chemistry';
import Handshake from '@components/icons/Handshake';
import UserBoy from '@components/icons/UserBoy';

// hosts
export const PROD_HOST = 'https://www.schaechinger.com';
export const WEB_HOST = process.env.NEXT_PUBLIC_WEB_HOST || PROD_HOST;
export const IMAGE_HOST = 'https://images.schaechinger.com';
export const STATIC_HOST = 'https://static.schaechinger.com';

// locales
export const supportedLangs: LocaleCode[] = ['de', 'en'];

// locale storage
export const LANGUAGE_SUGGESTION_OPT_OUT = 'ls-opt-out';

// navigation
export const MAIN_NAVIGATION = [
  { page: 'about', icon: UserBoy },
  { page: 'resume', icon: Briefcase },
  { page: 'projects', icon: Chemistry },
  { page: 'contact', icon: Handshake },
];
export const LEGAL_NAVIGATION = [
  'imprint',
  'privacy',
];

// recaptch
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
