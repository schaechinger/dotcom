'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import language from '@/messages/language';
import { l, splitPath, type LanguageCode } from '@/i18n';

const LanguageSwitch = () => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);

  const locale = useLocale();
  const switchLocale: LanguageCode = 'de' === locale ? 'en' : 'de';

  return (
    <Link
      href={l(page, switchLocale)}
      lang={locale}
      dir="ltr"
      title={language.name[switchLocale]}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-500 dark:white-black hover:text-white hover:dark:text-dark-800"
    >
      <span>{switchLocale}</span>
      <span className="sr-only">{language.name[switchLocale]}</span>
    </Link>
  );
};

export default LanguageSwitch;
