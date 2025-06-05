import { type TechData } from '@models/history';

type Props = {
  children?: React.ReactNode;
  item?: TechData;
};

const TechItem = ({ children, item }: Props) => (
  <li className="blurred-container text-secondary dark:text-primary border-secondary/30 dark:border-primary/10 rounded-full px-2">
    {item?.name || children}
  </li>
);

export default TechItem;
