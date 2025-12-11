import clsx from 'clsx';
import NextLink from 'next/link';
import { useLocale } from 'next-intl';

import type { LocaleCode } from '@lib/router';

type Props = {
  children: React.ReactNode;
  href: string;
  accessKey?: string;
  className?: string;
  inline?: boolean;
  locale?: LocaleCode;
  prefetch?: boolean;
  target?: string;
  title?: string;
  onClick?: React.MouseEventHandler;
};

const Link = ({ accessKey, children, className, href, inline, locale, onClick, prefetch, target, title }: Props) => {
  // const currentLocale = useLocale() as LocaleCode;
  const intlLocale = useLocale();
  const linkLocale = locale || intlLocale;

  const external = /^https?:\/\//.test(href);
  const linkTarget = target || (external ? '_blank' : undefined);

  return (
    <NextLink
      href={/^\//.test(href) ? `/${linkLocale}${href}` : href}
      target={linkTarget}
      lang={locale}
      dir={locale ? 'ltr' : undefined}
      className={clsx(className, inline && 'inline-link')}
      title={title}
      onClick={onClick}
      accessKey={accessKey}
      prefetch={prefetch}
    >{children}</NextLink>
  );
};

export default Link;
