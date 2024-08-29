'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import translations from '@/messages/language';
import { supportedLangs } from '@app/config';
import { l, splitPath } from '@lib/router';

const LanguageSelection = () => {
  const pathname = usePathname();
  const [path, setPath] = useState(splitPath(pathname));

  useEffect(() => {
    setPath(splitPath(pathname));
  }, [pathname]);

  return (
    <ul className="flex flex-col gap-2 sm:gap-0 justify-center">
      {supportedLangs.map((lang) => (
        <li key={lang} className="py-1.5">
          <Link
            href={l(path.page, lang)}
            lang={lang}
            dir="ltr"
            className="font-normal"
          >
            {translations.name[lang]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;
