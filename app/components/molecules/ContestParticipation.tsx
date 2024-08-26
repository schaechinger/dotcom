import { useLocale, useTranslations } from 'next-intl';

import { LanguageCode } from '@/i18n';
import { formatDate } from '@app/utils';
import LabeledContent from '@components/atoms/LabeledContent';
import { getSpeed, type ParticipationData } from '@models/participation';

export type SportType = 'running' | 'cycling' | 'multisport';

type Props = {
  participation: ParticipationData
};

const ContestParticipation = ({ participation }: Props) => {
  const locale = useLocale() as LanguageCode;
  const t = useTranslations('pages.sports');

  const { time } = participation;
  const speed = !!participation.time && getSpeed(participation, locale);

  return (
    <article className="my-6 md:my-4 md:flex md:gap-2 md:items-center">
      <header className="mb-2 md:mb-0 md:flex-1">
        <h3 className="text-h3 mb-0">{participation.event}</h3>
        <p className="text-sm">{formatDate(participation.date, locale, true)}</p>
      </header>
      <div className="flex md:flex-1">
        {time && <LabeledContent
          className="flex-1"
          label={t('time')}
          content={time}
        />}
        {time && <LabeledContent
          className="flex-1"
          label={t(`speed.${'running' === participation.sport ? 'pace' : 'perHour'}`)}
          content={speed || '-'}
        />}
        {time && <LabeledContent
          className="flex-1"
          label={t('rank')}
          content={participation.rank || '-'}
        />}
      </div>
    </article>
  );
};

export default ContestParticipation;
