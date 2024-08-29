'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Link from '@components/atoms/Link';
import Menu from '@components/icons/Menu';
import MenuClose from '@components/icons/MenuClose';
import LanguageSwitch from '@components/atoms/LanguageSwitch';
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
          {/* <li>
            <Link
              href="/""
              className={'' === page ? itemClasses.active : itemClasses.normal}
              onClick={() => setOpen(false)}
            >{translations.home}</Link>
          </li> */}
          {[
            'about',
            'resume',
            'projects',
            'contact',
          ].map((identifier) => (
            <li key={identifier}>
              <Link
                href={`/${identifier}`}
                className={page.startsWith(`/${identifier}`) ? itemClasses.active : itemClasses.normal}
                onClick={() => setOpen(false)}
              >{ translations[identifier] }</Link>
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
