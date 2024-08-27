import { type LocaleCode } from '@lib/router';

// hosts
export const PROD_HOST = 'https://www.schaechinger.com';
export const WEB_HOST = process.env.NEXT_PUBLIC_WEB_HOST || PROD_HOST;
export const IMAGE_HOST = 'https://images.schaechinger.com';
export const STATIC_HOST = 'https://static.schaechinger.com';

// locales
export const supportedLangs: LocaleCode[] = ['de', 'en'];

// locale storage
export const LANGUAGE_SUGGESTION_OPT_OUT = 'ls-opt-out';

// recaptch
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
