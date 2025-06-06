import { type TechData } from '@models/history';

type Props = {
  children?: React.ReactNode;
  item?: TechData;
};

const TechItem = ({ children, item }: Props) => (
  <li className="blurred-container text-primary-light dark:text-primary-dark border-primary-light/30 dark:border-primary-dark/10 rounded-full px-2">
    {item?.name || children}
  </li>
);

export default TechItem;
