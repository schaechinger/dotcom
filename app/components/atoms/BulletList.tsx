import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  bullets?: (string | ReactNode)[];
  children?: React.ReactNode[] | string[];
  className?: string;
  clear?: boolean;
}

const BulletList = ({ bullets, children, className, clear }: Props) => (
  <ul className={clsx(!clear && 'bullet-list', className)}>
    { (children || bullets)?.map((text, i) => (
      <li key={i}>{text}</li>
    )) }
  </ul>
);

export default BulletList;
