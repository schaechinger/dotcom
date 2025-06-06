'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import language from '@/messages/language';
import Link from '@components/atoms/Link';
import { splitPath, type LocaleCode } from '@lib/router';

type Props = {
  className?: string;
};

const LanguageToggle = ({ className }: Props) => {
  const pathname = usePathname();
  const locale = useLocale();

  const { page } = splitPath(pathname);
  const switchLocale: LocaleCode = 'de' === locale ? 'en' : 'de';

  return (
    <Link
      href={page}
      locale={switchLocale}
      title={language.name[switchLocale]}
      className={clsx('-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-light/60 hover:dark:bg-primary-dark/80 hover:text-contrast-800 hover:dark:text-contrast-50', className)}
    >
      <span>{switchLocale}</span>
      <span className="sr-only">{language.name[switchLocale]}</span>
    </Link>
  );
};

export default LanguageToggle;
