import BulletList from '@/app/components/atoms/BulletList';
import CompanyLink from '@components/atoms/CompanyLink';
import TechItem from '@components/atoms/TechItem';
import TimeSpan from '@components/atoms/TimeSpan';
import { type CareerData } from '@models/career';

type Props = {
  heading?: string;
  item: CareerData;
};

const CareerItem = ({ heading, item }: Props) => {
  const Heading = (heading || 'h3') as React.ElementType;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">
          <TimeSpan startDate={item.startDate} endDate={item.endDate} />
        </div>
        <Heading className="text-h3 text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">
          { item.title }
        </Heading>
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
