'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';

import Menu from '@components/icons/Menu';
import MenuClose from '@components/icons/MenuClose';
import LanguageSwitch from '@components/language/LanguageSwitch';
import ThemeToggle from '@/app/components/molecules/ThemeToggle';
import { l, type LanguageCode } from '@/i18n';
import clsx from 'clsx';

type Props = {
  themeTranslations: Record<string, string>;
  translations: Record<string, string>;
};

const Navigation = ({ translations, themeTranslations }: Props) => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);
  const locale = useLocale() as LanguageCode;

  const itemClasses = {
    normal: 'font-normal py-1 inline-block',
    active: 'font-bold py-1 inline-block text-primary-500 dark:text-primary-500',
  };

  return (
    <>
      <button type="button" className="lg:hidden items-center p-2 rounded-full self-center"
        aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setOpen((cur) => !cur)}
      >
        <span className="sr-only">{ isOpen ? translations.close : translations.open }</span>
        { isOpen ? <MenuClose className="text-xl" /> : <Menu className="text-xl" /> }
      </button>
      <nav className={clsx(isOpen ? 'h-auto' : 'h-0', '-mx-1 px-1 w-full lg:h-auto transition-transform overflow-hidden')}>
        <ul className="flex flex-col gap-2 pt-8 lg:pt-0">
          <li>
            <Link
              href={l('/', locale)}
              className={`/${locale}` === path ? itemClasses.active : itemClasses.normal}
              onClick={() => setOpen(false)}
            >{translations.about}</Link>
          </li>
          {[
            'resume',
            'projects',
            'contact',
          ].map((page) => (
            <li key={page}>
              <Link
                href={l(page, locale)}
                className={path.startsWith(`/${locale}/${page}`) ? itemClasses.active : itemClasses.normal}
                onClick={() => setOpen(false)}
              >{ translations[page] }</Link>
            </li>
          ))}

          <li className="mt-5 lg:mt-7 flex gap-6">
            <ThemeToggle translations={themeTranslations} />
            <LanguageSwitch />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
