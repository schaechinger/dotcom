import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@app/utils';
import { type LanguageCode } from '@lib/i18n';

type Props = {
  startDate: string;
  endDate?: string;
};

const TimeSpan = async ({ startDate, endDate }: Props) => {
  const t = useTranslations('timeSpan');
  const locale = useLocale() as LanguageCode;

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
