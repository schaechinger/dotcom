import { PROD_HOST, WEB_HOST } from '@app/config';
import { type LocaleCode } from '@lib/router';

/**
 * Format the date in mm.yyyy format.
 *
 * @param date The date in string format.
 */
export const formatDate = (date: string, lang?: LocaleCode, day = false) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(lang || 'en', {
    year: 'numeric',
    month: '2-digit',
    day: day ? '2-digit' : undefined,
  });
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
  removeItem: (key: string) => {
    const accessable = isBrowser();

    if (accessable) {
      window.localStorage.removeItem(key);
    }

    return accessable;
  },
  setItem: (key: string, value: string) => {
    const accessable = isBrowser();

    if (accessable) {
      window.localStorage.setItem(key, value);
    }

    return accessable;
  },
});

export const getYearSpan = (start: string) => {
  const date = new Date(start);
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();

  if (now.getMonth() < date.getMonth() || (now.getMonth() === date.getMonth() && date.getDate() > now.getDate())) {
    age -= 1;
  }

  return age;
};
