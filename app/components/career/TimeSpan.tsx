import type { ComponentProps } from '@app/interfaces';
import { formatDate } from '@app/utils';
import { _t, loadTranslations } from '@lib/i18n';

interface Props extends ComponentProps {
  startDate: string;
  endDate?: string;
}

const TimeSpan = async ({ startDate, endDate, lang }: Props) => {
  const translations = await loadTranslations('components.timeSpan', lang);

  return (
    <>
      { endDate
        ? `${formatDate(startDate, lang)} ${_t('span', translations, lang)} ${formatDate(endDate, lang)}`
        : `${_t('ongoing', translations, lang)} ${formatDate(startDate, lang)}` }
    </>
  );
};

export default TimeSpan;
