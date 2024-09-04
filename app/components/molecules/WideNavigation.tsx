'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import image from '@/public/images/schaechinger.jpg';
import { LEGAL_NAVIGATION, MAIN_NAVIGATION } from '@app/config';
import Link from '@components/atoms/Link';
import Logo from '@components/atoms/Logo';
import MenuButton from '@components/atoms/MenuButton';
import NavigationItem from '@components/atoms/NavigationItem';
import { splitPath } from '@lib/router';

type Props = {
  translations: Record<string, string>;
};

const WideNavigation = ({ translations }: Props) => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton
        open={open}
        onClick={() => setOpen((cur) => !cur)}
        translations={translations}
        className="lg:hidden ml-2 z-50"
      />
      {(
        <div className={clsx(open ? 'left-0' : '-left-full', 'fixed lg:hidden top-0 w-screen max-w-screen-xl min-h-screen z-40 px-4 sm:px-10 md:px-20 lg:px-4 pt-20 sm:pt-20 lg:pt-24 flex flex-col transition-all bg-dark-50 dark:bg-dark-800')}>
          <div className="sm:hidden flex flex-col gap-4 items-center">
            <Link href="/">
              <Image
                src={image}
                alt="Manuel Schächinger"
                className="w-24 rounded-full border-2 border-dark-950/25 dark:border-dark-200/80"
                sizes="96px"
                onClick={() => setOpen(false)}
              />
            </Link>
            <Logo />
          </div>

          <nav className="-mx-1 px-1 w-full flex-grow">
            <ul className="flex flex-col gap-6 lg:gap-2 pt-8">
              {MAIN_NAVIGATION.map((identifier) => (
                <li key={identifier} className="pl-4 sm:pl-[3.75rem] lg:pl-[4.5rem]">
                  <NavigationItem
                    href={`/${identifier}`}
                    active={page.startsWith(`/${identifier}`)}
                    onClick={() => setOpen(false)}
                    label={translations[identifier]}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-row gap-4 content-start pl-4 sm:pl-[3.75rem] lg:pl-[4.5rem] py-4">
            {LEGAL_NAVIGATION.map((page) => (
              <li key={page}>
                <Link
                  href={`/${page}`}
                  className="font-normal"
                  onClick={() => setOpen(false)}
                >{translations[page]}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default WideNavigation;
