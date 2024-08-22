import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { l, type LanguageCode } from '@/i18n';

const Logo = () => {
  const t = useTranslations('layout.header');
  const locale = useLocale() as LanguageCode;

  return (
    <Link href={l('/', locale)}>
      <p className="text-xl sm:text-2xl">
        <span className="text-primary-500 font-light">Manuel</span>
        <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
      </p>
      <p className="text-xs sm:text-sm text-dark-950 dark:text-dark-50 font-normal">{t('profession')}</p>
    </Link>
  );
};

export default Logo;
