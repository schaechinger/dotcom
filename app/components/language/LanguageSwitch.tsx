'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import language from '@i18n/language';
import { _l, type LanguageCode } from '@lib/i18n';

const LanguageSwitch = () => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  parts.splice(1, 1);
  const page = parts.join('/');

  const locale = useLocale();
  const switchLocale: LanguageCode = 'de' === locale ? 'en' : 'de';

  return (
    <Link
      href={_l(page, switchLocale)}
      lang={locale}
      dir="ltr"
      title={language.name[switchLocale]}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-500 dark:white-black hover:text-white hover:dark:text-dark-800"
    >
      {switchLocale.toUpperCase()}
      <span className="sr-only">{language.name[switchLocale]}</span>
    </Link>
  );
};

export default LanguageSwitch;
