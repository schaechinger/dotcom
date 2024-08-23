import clsx from 'clsx';

type Props = {
  className: string;
  href: string;
  icon: React.ReactNode;
  title: string;
};

const SocialLink = ({ className, href, icon: Icon, title }: Props) => (
  <a
    href={href}
    target="_blank"
    className={clsx('w-8 h-8 flex items-center justify-center rounded-full', className)}
    title={title}
  >
    {Icon}
  </a>
);

export default SocialLink;
