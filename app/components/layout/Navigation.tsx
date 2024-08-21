'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import type { ComponentProps } from '@app/interfaces';
import Menu from '@components/icons/Menu';
import MenuClose from '@components/icons/MenuClose';
import LanguageSwitch from '@components/language/LanguageSwitch';
import ThemeToggle from '@components/layout/ThemeToggle';
import { _l, _t } from '@lib/i18n';

interface Props extends ComponentProps {
  translations: Record<string, string>;
}

const Navigation = ({ lang, translations }: Props) => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);

  const itemClasses = {
    normal: 'font-normal',
    active: 'font-bold text-primary-500 dark:text-primary-500',
  };

  return (
    <>
      <button type="button" className="lg:hidden items-center p-2 rounded-full self-center"
        aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setOpen((cur) => !cur)}
      >
        <span className="sr-only">{ _t(isOpen ? 'close' : 'open', translations, lang) }</span>
        { isOpen ? <MenuClose className="text-xl" /> : <Menu className="text-xl" /> }
      </button>
      <nav className={`${!isOpen ? 'h-0' : 'h-auto'} -mx-1 px-1 w-full lg:h-auto transition-transform overflow-hidden`}>
        <ul className="flex flex-col gap-4 lg:gap-2 pb-2 pt-8 lg:pt-0">
          <li>
            <Link
              href={_l('/', lang)}
              className={`/${lang}` === path ? itemClasses.active : itemClasses.normal}
              onClick={() => setOpen(false)}
            >{_t('about', translations, lang)}</Link>
          </li>
          { [
            'resume',
            'projects',
            'contact',
          ].map((page) => (
            <li key={page}>
              <Link
                href={_l(page, lang)}
                className={path.startsWith(`/${lang}/${page}`) ? itemClasses.active : itemClasses.normal}
                onClick={() => setOpen(false)}
              >{ translations[page] }</Link>
            </li>
          )) }

          <li className="mt-4 lg:mt-10 flex gap-6">
            <ThemeToggle lang={lang} />
            <LanguageSwitch lang={lang} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
