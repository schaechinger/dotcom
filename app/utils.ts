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

export const getTimeDuration = (start: string, end?: string, includeMonths = false) => {
  const date = new Date(start);
  const endObj = new Date(end || Date.now());
  let age = endObj.getFullYear() - date.getFullYear();

  const startMonth = date.getMonth();
  const startDate = date.getDate();
  let endMonth = endObj.getMonth();
  const endDate = endObj.getDate();

  if (endObj.getMonth() < date.getMonth() || (endMonth === startMonth && startDate > endDate)) {
    age -= 1;
  }

  if (includeMonths) {
    if (endMonth < startMonth) {
      endMonth += 12;
    }

    let months = (endMonth - startMonth) + 1;
    if (startDate > endDate) {
      months -= 1;
    }

    age += months / 12;
  }

  return age;
};
