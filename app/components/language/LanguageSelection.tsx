'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import translations from '@/messages/language';
import { supportedLangs } from '@app/config';
import { type IconProps } from '@components/icons/Icon';
import WorldEast from '@components/icons/WorldEast';
import WorldWest from '@components/icons/WorldWest';
import { splitPath, l, type LocaleCode } from '@lib/router';

type IconComponent = (_p: IconProps) => JSX.Element;

const LanguageSelection = () => {
  const pathname = usePathname();
  const [path, setPath] = useState(splitPath(pathname));

  const IconMapper: Record<LocaleCode, IconComponent> = {
    de: WorldEast,
    en: WorldWest,
  };
  const Icon = IconMapper[path.locale] || WorldEast;

  useEffect(() => {
    setPath(splitPath(pathname));
  }, [pathname]);

  return (
    <ul className="flex flex-col gap-2 sm:gap-0 justify-center">
      <li className="hidden">
        <Icon className="text-xl -mt-1" />
      </li>
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
