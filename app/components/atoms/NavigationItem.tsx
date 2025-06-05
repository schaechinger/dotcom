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
      'navigation-item px-4 py-3 block group',
      active ? 'navigation-item--active font-bold' : 'font-normal',
    )}
    onClick={onClick}
  >
    {Icon && <Icon className={clsx(
      'text-2xl inline-block -mt-1 mr-4',
      active ? 'text-dark-950 dark:text-dark-50' : 'text-dark-950/80 dark:text-dark-50/80',
      'group-hover:text-current'
      )} />}
    {label}
  </Link>
);

export default NavigationItem;
