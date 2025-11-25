import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@app/utils';
import type { LocaleCode } from '@lib/router';

type Props = {
  startDate?: string;
  endDate?: string;
};

const TimeSpan = ({ startDate, endDate }: Props) => {
  const t = useTranslations('timeSpan');
  const locale = useLocale() as LocaleCode;

  const dates = {
    startDate: startDate ? formatDate(startDate, locale) : 0,
    endDate: endDate ? formatDate(endDate, locale) : 0,
  };

  let identifier: 'ongoing' | 'period' | 'single' = 'ongoing';
  if (dates.startDate && dates.endDate) {
    identifier = 'period';
  } else if (dates.endDate) {
    identifier = 'single';
  }

  return t(identifier, dates)
};

export default TimeSpan;
