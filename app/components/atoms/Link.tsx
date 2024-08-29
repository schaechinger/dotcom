import Link from 'next/link';
import { useLocale } from 'next-intl';

import { type LocaleCode } from '@lib/router';

type Props = {
  children: React.ReactNode;
  href: string;
  target?: string;
  locale?: LocaleCode;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler;
};

const LocaleLink = ({ children, href, className, locale, onClick, target, title }: Props) => {
  const currentLocale = useLocale() as LocaleCode;
  const external = /^https?:\/\//.test(href);
  const linkTarget = target || (external ? '_blank' : undefined);
  const Component = target ? 'a' : Link;

  return (
    <Component
      href={external ? href : `/${locale || currentLocale}${href}`}
      target={linkTarget}
      lang={locale}
      dir={locale ? 'ltr' : undefined}
      className={className}
      title={title}
      onClick={onClick}
    >{children}</Component>
  );
};

export default LocaleLink;
