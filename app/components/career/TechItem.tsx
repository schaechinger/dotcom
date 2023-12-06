import { TechData } from '@/models/career';

const TechItem = ({ item, color }: { item: TechData, color?: string }) => {
  const colorClasses = 'medalmonday' === color
    ? 'text-medalmonday-500 bg-medalmonday-100 border border-medalmonday-100'
    : 'text-primary-500 bg-primary-100 border border-primary-100';

  return (
    <li key={item.slug} className={`${colorClasses} rounded-full px-2`}>
      <span>{ item.name }</span>
    </li>
  );
};

export default TechItem;
