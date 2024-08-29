import clsx from 'clsx';

type Props = {
  className: string;
  iconClassName: string;
  href: string;
  icon: React.ReactNode;
  title: string;
};

const SocialLink = ({ className, iconClassName, href, icon: Icon, title }: Props) => (
  <>
    <a
      href={href}
      target="_blank"
      className={clsx('flex gap-2 items-center group', className)}
      title={title}
    >
      <span className={clsx('w-8 h-8 text-xl flex items-center justify-center rounded-full', iconClassName)}>{Icon}</span>
      <span className="font-normal">{title}</span>
    </a>
  </>
);

export default SocialLink;
