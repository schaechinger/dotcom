import { useTranslations } from 'next-intl';

import { getTimeDuration } from '@app/utils';
import Link from '@components/atoms/Link';
import TimeSpan from '@components/atoms/TimeSpan';
import ArrowRight from '@components/icons/ArrowRight';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import { HistoryType, type Company } from '@models/history';

type Props = {
  title: React.ReactNode;
  company?: Company;
  dates?: (string | undefined)[];
  heading?: string;
  link?: string;
  type?: HistoryType;
};

const HistoryItemHeader = ({ company, dates, heading, link, title, type }: Props) => {
  const Heading = (heading || 'h3') as React.ElementType;
  const t = useTranslations('timeSpan');
  const duration: number[] = [];
  if (!!dates?.length && dates[0]) {
    const value = getTimeDuration(dates[0], dates[1] || '', true);
    duration.push(Math.floor(value));
    duration.push(Math.round((value % 1) * 12))
  }

  return (
    <header className="history-item__header sm:grid sm:grid-cols-9 gap-4 items-start">
      {!!dates?.length && <div className="text-sm leading-6 font-normal flex sm:flex-col justify-between sm:justify-start sm:col-span-2">
        <div><TimeSpan startDate={dates![0]} endDate={dates![1]} /></div>
        {!!duration.length && <div>{t('duration', { years: duration[0], months: duration[1] })}</div>}
      </div>}
      <div className="sm:col-span-7">
        {!!(company || type) && (
          <div className="font-thin">
            <HistoryItemCompany company={company} type={type} />
          </div>
        )}
        <Heading className="text-h3 font-bold mb-0">
          {link ? (
            <Link href={link} className="group">
              {title}
              <ArrowRight className="inline-block transition-all text-primary-light/60 dark:text-primary-dark/60 group-hover:text-current group-hover:text-xl -rotate-45 -mt-1 ml-1 group-hover:ml-0.5" />
            </Link>
          ) : title}
        </Heading>
      </div>
    </header>
  );
};

export default HistoryItemHeader;
