export const locale = 'de';

/**
 * Format the date in mm.yyyy format.
 *
 * @param date The date in string format.
 */
export const formatDate = (date: string) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString(locale, { year: 'numeric', month: '2-digit' });
};