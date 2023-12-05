import { TechData } from '@/models/career';

const TechItem = ({ item }: { item: TechData }) => (
  <li key={item.slug} className="text-primary-500 bg-primary-100 border border-primary-100 rounded-full px-2">
    <span>{ item.name }</span>
  </li>
);

export default TechItem;
