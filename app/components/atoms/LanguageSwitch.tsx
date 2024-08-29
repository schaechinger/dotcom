'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import language from '@/messages/language';
import Link from '@components/atoms/Link';
import { splitPath, type LocaleCode } from '@lib/router';

const LanguageSwitch = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const { page } = splitPath(pathname);
  const switchLocale: LocaleCode = 'de' === locale ? 'en' : 'de';

  return (
    <Link
      href={page}
      locale={switchLocale}
      title={language.name[switchLocale]}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-400 hover:text-dark-800 hover:dark:text-dark-50"
    >
      <span>{switchLocale}</span>
      <span className="sr-only">{language.name[switchLocale]}</span>
    </Link>
  );
};

export default LanguageSwitch;
