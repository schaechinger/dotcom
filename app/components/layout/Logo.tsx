import Link from 'next/link';

import { ComponentProps } from '@app/interfaces';
import { _l, _t, loadTranslations } from '@lib/i18n';

const Logo = async ({ lang }: ComponentProps) => {
  const translations = await loadTranslations('components.header', lang);

  return (
    <Link href={_l('/', lang)} className="text-2xl">
      <p>
        <span className="text-primary-500 font-light">Manuel</span>
        <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
      </p>
      <p className="text-sm text-dark-950 dark:text-dark-50 font-normal">{_t('profession', translations, lang)}</p>
    </Link>
  );
};

export default Logo;
