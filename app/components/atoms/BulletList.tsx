import clsx from 'clsx';

type Props = {
  bullets?: string[];
  children?: React.ReactNode[] | string[];
  className?: string;
}

const BulletList = ({ bullets, children, className }: Props) => (
  <ul className={clsx('bullet-list', className)}>
    { (children || bullets)!.map((text, i) => (
      <li key={i}>{ text }</li>
    )) }
  </ul>
);

export default BulletList;
