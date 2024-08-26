import { useLocale } from 'next-intl';

import { LanguageCode } from '@/i18n';
import { formatDate } from '@app/utils';
import LabeledContent from '../atoms/LabeledContent';

export type SportType = 'running' | 'cycling' | 'multisport';

type Props = {
  event: string;
  date: string;
  sport: SportType;

  id?: string;
  time?: string;
};

const ContestParticipation = ({ date, event, id, sport, time }: Props) => {
  const locale = useLocale() as LanguageCode;

  return (
    <article className="my-4">
      <header className="mb-2">
        <h3 className="text-h3 mb-0">{event}</h3>
        <p className="text-sm">{formatDate(date, locale, true)}</p>
      </header>
      <div>
        {time && <LabeledContent
          label="Zeit"
          content={time}
        />}
      </div>
    </article>
  );
};

export default ContestParticipation;
