'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Menu from '@components/icons/Menu';
import SocialLinks from '@components/layout/SocialLinks';
import MenuClose from '../icons/MenuClose';

const Navigation = () => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="lg:hidden items-center p-2 rounded-full self-center"
        aria-controls="navbar-default" aria-expanded="false"
        onClick={() => setOpen((cur) => !cur)}
      >
        <span className="sr-only">{ isOpen ? 'Menü öffnen' : 'Menü schließen' }</span>
        { isOpen ? <MenuClose className="text-xl" /> : <Menu className="text-xl" /> }
      </button>
      <nav className={`${!isOpen ? 'h-0' : 'h-auto'} -mx-1 px-1 w-full lg:h-auto transition-transform overflow-hidden`}>
        <ul className="flex flex-col gap-4 lg:gap-2 py-2">
          <li>
            <Link
              href="/"
              className={`font-normal${'/' === path && ' text-primary-500 dark:text-primary-500'}`}
              onClick={() => setOpen(false)}
            >Über&nbsp;mich</Link>
          </li>
          { [
            { link: '/resume', label: 'Berufserfahrung' },
            { link: '/projects', label: 'Projekte' },
            { link: '/contact', label: 'Kontakt' },
          ].map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`font-normal ${path.startsWith(item.link) && ' text-primary-500 dark:text-primary-500'}`}
                onClick={() => setOpen(false)}
              >{ item.label }</Link>
            </li>
          )) }

          <li className="my-2 lg:mt-10 lg:mb-0">
            <SocialLinks />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
