import { type TechData } from '@models/history';

type Props = {
  item: TechData;
};

const TechItem = ({ item }: Props) => (
  <li key={item.slug} className="text-primary-500 bg-primary-100 border-primary-100 border rounded-full px-2">
    <span>{ item.name }</span>
  </li>
);

export default TechItem;
