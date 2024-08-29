'use client';

import { useLocale } from 'next-intl';

import { Link, usePathname } from '@/routing';
import language from '@/messages/language';
import { type LocaleCode } from '@lib/router';

const LanguageSwitch = () => {
  const page = usePathname();

  const locale = useLocale();
  const switchLocale: LocaleCode = 'de' === locale ? 'en' : 'de';

  return (
    <Link
      href={page}
      lang={switchLocale}
      locale={switchLocale}
      dir="ltr"
      title={language.name[switchLocale]}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-400 hover:text-dark-800 hover:dark:text-white"
    >
      <span>{switchLocale}</span>
      <span className="sr-only">{language.name[switchLocale]}</span>
    </Link>
  );
};

export default LanguageSwitch;
