import clsx from 'clsx';

import Link from '@components/atoms/Link';

type Props = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: React.MouseEventHandler;
};

const NavigationItem = ({ active, href, label, onClick }: Props) => (
  <Link
    href={href}
    className={clsx(
      'py-1 inline-block navigation-item',
      active ? 'font-bold navigation-item--active' : 'font-normal',
    )}
    onClick={onClick}
  >{label}</Link>
);

export default NavigationItem;
