import { type LanguageCode } from '@/i18n';
import { PROD_HOST, WEB_HOST } from '@app/config';

/**
 * Format the date in mm.yyyy format.
 *
 * @param date The date in string format.
 */
export const formatDate = (date: string, lang?: LanguageCode) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(lang || 'en', { year: 'numeric', month: '2-digit' });
};

/**
 * Verify whether the code is executed on client side.
 */
export const isBrowser = () => 'undefined' !== typeof window;

/**
 * Verify the app runs in production mode.
 */
export const isProd = () => PROD_HOST === WEB_HOST;

/**
 * Wraps local storage functions.
 */
export const useLocalStorage = () => ({
  getItem: (key: string) => {
    if (isBrowser()) {
      return window.localStorage.getItem(key) || '';
    }

    return '';
  },
  setItem: (key: string, value: string) => {
    const accessable = isBrowser();

    if (accessable) {
      window.localStorage.setItem(key, value);
    }

    return accessable;
  },
});
