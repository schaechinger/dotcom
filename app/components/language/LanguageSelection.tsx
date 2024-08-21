'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ComponentProps } from '@app/interfaces';
import { IconProps } from '@components/icons/Icon';
import WorldEast from '@components/icons/WorldEast';
import WorldWest from '@components/icons/WorldWest';
import languageTranslations from '@i18n/language';
import { _l, _t, LanguageCode, supportedLangs } from '@lib/i18n';

type IconComponent = (_p: IconProps) => JSX.Element;

const LanguageSelection = ({ lang }: ComponentProps) => {
  const pathname = usePathname();
  const [path, setPath] = useState({
    lang,
    page: '',
  });

  const IconMapper: Record<LanguageCode, IconComponent> = {
    de: WorldEast,
    en: WorldWest,
  };
  const Icon = IconMapper[path.lang] || WorldEast;

  useEffect(() => {
    const parts = pathname.split('/');
    const currentLang = (parts[1] || 'de').toLowerCase() as LanguageCode;
    parts.splice(1, 1);

    setPath({
      lang: currentLang,
      page: parts.join('/'),
    });
  }, [pathname]);

  return (
    <ul className="flex justify-start gap-4 mt-6 mb-4">
      <li>
        <Icon className="text-xl -mt-1" />
      </li>
      {supportedLangs.map((lang) => (
        <li key={lang}>
          <Link href={_l(path.page, lang)} lang={lang} dir="ltr" className="font-normal">
            {_t('name', languageTranslations, lang)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;
