import { type TechData } from '@models/history';

type Props = {
  children?: React.ReactNode;
  item?: TechData;
};

const TechItem = ({ children, item }: Props) => (
  <li className="text-secondary dark:text-primary border-secondary/60 border-2 rounded-full px-2">
    {item?.name || children}
  </li>
);

export default TechItem;
