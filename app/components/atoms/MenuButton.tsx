import clsx from 'clsx';

type Props = {
  onClick: React.MouseEventHandler;
  className?: string;
  open?: boolean;
};

const MenuButton = ({ className, onClick, open }: Props) => (
  <button
    className={clsx('menu-button group', className)}
    type="button"
    onClick={onClick}
  >
    <span className={clsx('menu-button__bar', open && 'menu-button__bar--rotated')} />
    <span className={clsx('menu-button__bar', open && 'menu-button__bar--rotated')} />
  </button>
);

export default MenuButton;
