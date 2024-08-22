import { useLocale } from 'next-intl';

import CompanyLink from '@components/career/CompanyLink';
import TechItem from '@components/career/TechItem';
import TimeSpan from '@components/career/TimeSpan';
import BulletList from '@components/projects/BulletList';
import { type LanguageCode } from '@lib/i18n';
import { type CareerData } from '@models/career';

type Props = {
  item: CareerData;
};

const CareerItem = ({ item }: Props) => {
  const locale = useLocale() as LanguageCode;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">
          <TimeSpan startDate={item.startDate} endDate={item.endDate} lang={locale} />
        </div>
        <h3 className="text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">{ item.title }</h3>
      </header>
      <div className="font-thin mb-2">
        <CompanyLink company={item.company} />
      </div>
      { item.description && <p>{ item.description }</p> }
      { (!item.description && item.bullets?.length) && <BulletList bullets={item.bullets} /> }
      <ul className="flex flex-wrap mt-3 gap-2">
        { (item.tech || []).map((t) => (
          <TechItem key={t.slug} item={t} />
        ))}
      </ul>
    </article>
  );
};

export default CareerItem;
