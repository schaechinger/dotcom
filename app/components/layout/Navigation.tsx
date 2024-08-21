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
  translations: Record<string, unknown>;
}

const Navigation = ({ lang, translations }: Props) => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);

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
        <ul className="flex flex-col gap-4 lg:gap-2 py-2">
          <li>
            <Link
              href={_l('/', lang)}
              className={`font-normal ${`/${lang}` === path && 'text-primary-500 dark:text-primary-500'}`}
              onClick={() => setOpen(false)}
            >{_t('about', translations, lang)}</Link>
          </li>
          { [
            { link: _l('resume', lang), label: _t('experience', translations, lang) },
            { link: _l('projects', lang), label: _t('projects', translations, lang) },
            { link: _l('contact', lang), label: _t('contact', translations, lang) },
          ].map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`font-normal ${path.startsWith(item.link) && 'text-primary-500 dark:text-primary-500'}`}
                onClick={() => setOpen(false)}
              >{ item.label }</Link>
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
