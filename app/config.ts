export const PROD_HOST = 'https://www.schaechinger.com';
export const WEB_HOST = process.env.NEXT_PUBLIC_WEB_HOST || PROD_HOST;
export const IMAGE_HOST = 'https://images.schaechinger.com';
export const STATIC_HOST = 'https://static.schaechinger.com';

/** Used in local storage to hide the language suggestion popup. */
export const LANGUAGE_SUGGESTION_OPT_OUT = 'ls-opt-out';

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
