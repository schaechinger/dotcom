import clsx from 'clsx';
import NextLink from 'next/link';

import { type LocaleCode } from '@lib/router';
import { useLocale } from 'next-intl';

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  inline?: boolean;
  locale?: LocaleCode;
  target?: string;
  title?: string;
  onClick?: React.MouseEventHandler;
};

const Link = ({ children, className, href, inline, locale, onClick, target, title }: Props) => {
  // const currentLocale = useLocale() as LocaleCode;
  const intlLocale = useLocale();
  const linkLocale = locale || intlLocale;

  const external = /^https?:\/\//.test(href);
  const linkTarget = target || (external ? '_blank' : undefined);

  return (
    <NextLink
      href={external ? href : `/${linkLocale}${href}`}
      target={linkTarget}
      lang={locale}
      dir={locale ? 'ltr' : undefined}
      className={clsx(className, inline && 'inline-link')}
      title={title}
      onClick={onClick}
    >{children}</NextLink>
  );
};

export default Link;
