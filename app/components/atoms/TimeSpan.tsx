import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@app/utils';
import { type LocaleCode } from '@lib/router';

type Props = {
  startDate: string;
  endDate?: string;
};

const TimeSpan = async ({ startDate, endDate }: Props) => {
  const t = useTranslations('timeSpan');
  const locale = useLocale() as LocaleCode;

  const start = formatDate(startDate, locale);

  return (
    <>
      { endDate
        ? `${start} ${t('span')} ${formatDate(endDate, locale)}`
        : `${t('ongoing')} ${start}` }
    </>
  );
};

export default TimeSpan;
