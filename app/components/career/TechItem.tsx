import { TechData } from '@models/career';

type Props = {
  item: TechData;
  color?: string;
};

const TechItem = ({ item, color }: Props) => {
  const colorClasses = {
    primary: 'text-primary-500 bg-primary-100 border-primary-100',
    primaryHighlight: 'text-dark-50 bg-primary-500 border-primary-100',
    medalmonday: 'text-medalmonday-500 bg-medalmonday-100 border-medalmonday-100',
    medalmondayHighlight: 'text-dark-50 bg-medalmonday-500 border-medalmonday-100',
  }

  const techColor = [
    (color && Object.keys(colorClasses).includes(color)) ? color : 'primary',
    // item.slug === highlight ? 'Highlight' : '',
  ].join('') as 'primary';

  return (
    <li key={item.slug} className={`${colorClasses[techColor]} border rounded-full px-2`}>
      <span>{ item.name }</span>
    </li>
  );
};

export default TechItem;
