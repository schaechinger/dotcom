'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ComponentProps } from '@app/interfaces';
import { _t, LanguageCode } from '@lib/i18n';

const LanguageSwitch = ({ lang }: ComponentProps) => {
  const pathname = usePathname();
  const [switchLang, setSwitchLang] = useState({
    lang: 'de' === lang ? 'en' : 'de',
    path: 'de' === lang ? '/en' : '/de',
  });

  useEffect(() => {
    const parts = pathname.split('/');
    const currentLang = (parts[1] || 'de').toLowerCase() as LanguageCode;
    const nextLang = 'de' === currentLang ? 'en' : 'de';
    parts[1] = nextLang;

    setSwitchLang({
      lang: nextLang,
      path: parts.join('/'),
    });
  }, [pathname]);

  return (
    <Link
      href={switchLang.path}
      className="-ml-1 w-8 h-8 relative flex justify-center items-center rounded-full transition-colors hover:bg-primary-500 dark:white-black hover:text-white hover:dark:text-dark-800"
    >
      <div>{switchLang.lang}</div>
    </Link>
  );
};

export default LanguageSwitch;
