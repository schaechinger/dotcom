import { type TechData } from '@models/history';

type Props = {
  item: TechData;
};

const TechItem = ({ item }: Props) => (
  <li key={item.slug} className="text-discreet-shade dark:text-discreet-primary border-discreet-shade/60 border-2 rounded-full px-2">
    {item.name}
  </li>
);

export default TechItem;
