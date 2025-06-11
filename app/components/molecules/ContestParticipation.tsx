import { useLocale, useTranslations } from 'next-intl';

import { formatDate } from '@app/utils';
import LabeledContent from '@components/atoms/LabeledContent';
import { getSpeed, type ParticipationData } from '@models/participation';
import { type LocaleCode } from '@lib/router';
import Medal from '../icons/Medal';

export type SportType = 'running' | 'cycling' | 'multisport';

type Props = {
  participation: ParticipationData;
  /** Personal best */
  pb?: Boolean;
};

const ContestParticipation = ({ participation, pb }: Props) => {
  const locale = useLocale() as LocaleCode;
  const t = useTranslations('pages.sports');

  const { time } = participation;
  const speed = !!participation.time && getSpeed(participation, locale);

  return (
    <article className="md:flex md:gap-2 md:items-center sm:hover:bg-primary-light/10 sm:hover:dark:bg-primary-dark/20 transition-colors sm:rounded-lg -mx-4 sm:-mx-3 my-4 px-4 sm:px-3 py-2">
      <header className="mb-2 md:mb-0 md:flex-1">
        <h3 className="text-h3 mb-0">{participation.event}{pb
          && <Medal className="-mt-1 ml-1 text-amber-500" title="Bestzeit" />}</h3>
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
