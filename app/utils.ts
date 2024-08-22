import { type LanguageCode } from '@/i18n';

/**
 * Format the date in mm.yyyy format.
 *
 * @param date The date in string format.
 */
export const formatDate = (date: string, lang?: LanguageCode) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(lang || 'en', { year: 'numeric', month: '2-digit' });
};

export const isBrowser = () => 'undefined' !== typeof window;

export const useLocalStorage = () => ({
  getItem: (key: string) => {
    if (isBrowser()) {
      return window.localStorage.getItem(key) || '';
    }

    return '';
  },
  setItem: (key: string, value: string) => {
    if (isBrowser()) {
      window.localStorage.setItem(key, value);

      return true;
    }

    return false;
  },
});
