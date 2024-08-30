import { useTranslations } from 'next-intl';

import Link from '@components/atoms/Link';

const Logo = () => {
  const t = useTranslations('layout.header');

  return (
    <Link href="/">
      <p className="text-xl sm:text-2xl">
        <span className="text-discreet-shade dark:text-discreet-primary font-thin">Manuel</span>
        <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
      </p>
      <p className="text-xs sm:text-sm text-dark-950 dark:text-dark-50 tracking-wide font-normal">{t('profession')}</p>
    </Link>
  );
};

export default Logo;
