import TechItem from '@/app/components/career/TechItem';
import { CareerData } from '@/models/career';
import { formatDate } from '@/services/utils';

interface CareerItemProps {
  item: CareerData;
}

const CareerItem = ({ item }: CareerItemProps) => {
  const CompanyTag = item.company?.link ? 'a' : 'span';

  const date = 2 === item.date.length
    ? `${formatDate(item.date[0])} bis ${formatDate(item.date[1])}`
    : `seit ${formatDate(item.date[0])}`;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors lg:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">{ date }</div>
        <h4 className="text-lg text-dark-950 dark:text-dark-50 font-bold sm:order-1">{ item.title }</h4>
      </header>
      <div className="font-thin mb-2">
        <CompanyTag
          href={item.company?.link}
          target="_blank"
          className={`font-thin${item.company?.link ? ' hover:text-primary-500' : ''}`}
        >{ item.company?.name }</CompanyTag>{item.company?.location ? `, ${item.company?.location}` : '' }
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
          <TechItem key={t} item={t} />
        ))}
      </ul>
    </article>
  );
};

export default CareerItem;
