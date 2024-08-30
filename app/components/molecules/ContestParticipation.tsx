import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@app/utils';
import LabeledContent from '@components/atoms/LabeledContent';
import { getSpeed, type ParticipationData } from '@models/participation';
import { type LocaleCode } from '@lib/router';

export type SportType = 'running' | 'cycling' | 'multisport';

type Props = {
  participation: ParticipationData
};

const ContestParticipation = ({ participation }: Props) => {
  const locale = useLocale() as LocaleCode;
  const t = useTranslations('pages.sports');

  const { time } = participation;
  const speed = !!participation.time && getSpeed(participation, locale);

  return (
    <article className="md:flex md:gap-2 md:items-center sm:hover:bg-secondary/10 sm:hover:dark:bg-primary/15 transition-colors sm:rounded-md my-2 sm:my-0 -mx-4 px-4 py-4">
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
