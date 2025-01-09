import clsx from 'clsx';
import { JSX } from 'react';

import Link from '@components/atoms/Link';
import { IconProps } from '@components/icons/Icon';

type Props = {
  href: string;
  label: string;
  active?: boolean;
  icon?: (_props: IconProps) => JSX.Element,
  onClick?: React.MouseEventHandler;
};

const NavigationItem = ({ active, href, icon: Icon, label, onClick }: Props) => (
  <Link
    href={href}
    className={clsx(
      'py-1 inline-block navigation-item group',
      active ? 'font-bold navigation-item--active' : 'font-normal',
    )}
    onClick={onClick}
  >
    {Icon && <Icon className={clsx(
      'text-2xl inline-block -mt-1 mr-4 group-hover:text-secondary/80 dark:group-hover:text-primary/80',
      active ? 'text-dark-950 dark:text-dark-50' : 'text-dark-950/80 dark:text-dark-50/80',
      )} />}
    {label}
  </Link>
);

export default NavigationItem;
