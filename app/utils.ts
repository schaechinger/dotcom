import { type LanguageCode } from '@lib/i18n';

/**
 * Format the date in mm.yyyy format.
 *
 * @param date The date in string format.
 */
export const formatDate = (date: string, lang?: LanguageCode) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(lang || 'de', { year: 'numeric', month: '2-digit' });
};