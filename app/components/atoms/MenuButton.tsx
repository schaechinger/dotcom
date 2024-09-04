import clsx from 'clsx';

type Props = {
  onClick: React.MouseEventHandler;
  translations: Record<string, string>;
  className?: string;
  open?: boolean;
};

const MenuButton = ({ className, onClick, open, translations }: Props) => (
  <button
    className={clsx('menu-button group', className)}
    type="button"
    onClick={onClick}
  >
    <span className={clsx('menu-button__bar', open && 'menu-button__bar--rotated')} />
    <span className={clsx('menu-button__bar', open && 'menu-button__bar--rotated')} />
    <span className="sr-only">{open ? translations.close : translations.open}</span>
  </button>
);

export default MenuButton;
