import { TechData } from '@models/career';

type Props = {
  item: TechData;
  color?: string;
};

const TechItem = ({ item, color }: Props) => {
  const colorClasses = {
    primary: 'flex items-center text-primary-500',
    medalmonday: 'flex items-center text-medalmonday-500',
  };
  const bracketClasses = {
    primary: 'text-xl text-primary-300',
    medalmonday: 'text-xl text-medalmonday-300',
  };

  const techColor = [
    (color && Object.keys(colorClasses).includes(color)) ? color : 'primary',
    // item.slug === highlight ? 'Highlight' : '',
  ].join('') as 'primary';

  return (
    <li key={item.slug} className={colorClasses[techColor]}>
      <span className={bracketClasses[techColor]}>[</span>
      <span className="font-medium">{ item.name }</span>
      <span className={bracketClasses[techColor]}>]</span>
    </li>
  );
};

export default TechItem;
