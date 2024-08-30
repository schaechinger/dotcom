'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import NavigationItem from '@components/atoms/NavigationItem';
import Menu from '@components/icons/Menu';
import MenuClose from '@components/icons/MenuClose';
import LanguageToggle from '@/app/components/atoms/LanguageToggle';
import ThemeToggle from '@components/molecules/ThemeToggle';
import { splitPath } from '@lib/router';

type Props = {
  themeTranslations: Record<string, string>;
  translations: Record<string, string>;
};

const Navigation = ({ translations, themeTranslations }: Props) => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  const { page } = splitPath(pathname);

  return (
    <>
      <button type="button" className="lg:hidden items-center p-2 rounded-full self-center"
        aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setOpen((cur) => !cur)}
      >
        <span className="sr-only">{ isOpen ? translations.close : translations.open }</span>
        { isOpen ? <MenuClose className="text-xl" /> : <Menu className="text-xl" /> }
      </button>
      <nav className={clsx(isOpen ? 'h-auto' : 'h-0 overflow-hidden', '-mx-1 px-1 w-full lg:h-auto transition-transform lg:overflow-visible')}>
        <ul className="flex flex-col gap-2 pt-8 lg:pt-0">
          {[
            'about',
            'resume',
            'projects',
            'contact',
          ].map((identifier) => (
            <li key={identifier}>
              <NavigationItem
                href={`/${identifier}`}
                active={page.startsWith(`/${identifier}`)}
                onClick={() => setOpen(false)}
                label={translations[identifier]}
              />
            </li>
          ))}

          <li className="mt-5 lg:mt-7 flex gap-6">
            <ThemeToggle translations={themeTranslations} />
            <LanguageToggle />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
