import { type TechData } from '@models/history';

type Props = {
  children?: React.ReactNode;
  item?: TechData;
};

const TechItem = ({ children, item }: Props) => (
  <li className="blurred-container text-primary-light dark:text-primary-dark border-2 border-primary-light/30 dark:border-primary-dark/30 rounded-lg px-2">
    {item?.name || children}
  </li>
);

export default TechItem;
