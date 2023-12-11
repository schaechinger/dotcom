import TechItem from '@components/career/TechItem';
import { CareerData } from '@models/career';
import CompanyLink from './CompanyLink';
import TimeSpan from './TimeSpan';

interface Props {
  item: CareerData;
}

const CareerItem = ({ item }: Props) => (
  <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
    <header className="career-item__headline sm:flex items-center">
      <div className="career-item__dates text-sm font-normal sm:order-2">
        <TimeSpan startDate={item.startDate} endDate={item.endDate} />
      </div>
      <h4 className="text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">{ item.title }</h4>
    </header>
    <div className="font-thin mb-2">
      <CompanyLink company={item.company} />
    </div>
    { item.description ? <p>{ item.description }</p> : null }
    { (!item.description && item.bullets?.length) ? (
      <ul className="bullet-list">{
        item.bullets.map((b, i) => (
          <li key={i}>{ b }</li>
        ))
        }</ul>
      ) : null
    }
    <ul className="flex flex-wrap mt-3 gap-2">
      { (item.tech || []).map((t) => (
        <TechItem key={t.slug} item={t} />
      ))}
    </ul>
  </article>
);

export default CareerItem;
