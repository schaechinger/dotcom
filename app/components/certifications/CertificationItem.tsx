import { useLocale } from 'next-intl';

import { formatDate } from '@app/utils';
import LinkButton from '@components/LinkButton';
import TechItem from '@components/career/TechItem';
import BulletList from '@components/projects/BulletList';
import { type LanguageCode } from '@lib/i18n';
import { type CertificationData } from '@models/certification';

type Props = {
  item: CertificationData;
};

const CertificationItem = ({ item }: Props) => {
  const locale = useLocale() as LanguageCode;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">
          {formatDate(item.date, locale)}
        </div>
        <h3 className="text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">{ item.title }</h3>
      </header>
      { item.description && <p className="mt-2">{ item.description }</p> }
      { (!item.description && item.bullets?.length) && <BulletList bullets={item.bullets} /> }
      { item.link && <div className="mt-2">
          <LinkButton href={item.link.href} label={item.link.label} />
        </div> }
      { !!item.tech?.length && <ul className="flex flex-wrap mt-3 gap-2">
          { (item.tech || []).map((t) => (
            <TechItem key={t.slug} item={t} />
          ))}
        </ul> }
    </article>
  );
};

export default CertificationItem;
