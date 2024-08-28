'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import LanguageSwitch from '@components/language/LanguageSwitch';
import ThemeToggle from '@components/molecules/ThemeToggle';
import { l, type LocaleCode } from '@lib/router';

type Props = {
  themeTranslations: Record<string, string>;
  translations: Record<string, string>;
};

const Navigation = ({ translations, themeTranslations }: Props) => {
  const path = usePathname();
  const locale = useLocale() as LocaleCode;

  const itemClasses = {
    normal: 'font-normal py-1 inline-block',
    active: 'font-bold py-1 inline-block text-primary-500 dark:text-primary-500',
  };

  return (
    <>
      <div className="flex items-center gap-2 lg:gap-6 lg:order-2">
        <ThemeToggle translations={themeTranslations} />
        <LanguageSwitch />
      </div>
      <nav className="-mx-1 px-1 w-full lg:h-auto transition-transform overflow-x-auto no-scrollbar">
        <ul className="flex flex-row lg:flex-col flex-nowrap gap-4 lg:gap-2 pt-3 lg:pt-0">
          {[
            'about',
            'resume',
            'projects',
            'contact',
          ].map((page) => (
            <li key={page} className="whitespace-nowrap">
              <Link
                href={l(page, locale)}
                className={path.startsWith(`/${locale}/${page}`) ? itemClasses.active : itemClasses.normal}
              >{ translations[page] }</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
