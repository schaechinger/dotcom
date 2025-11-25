import { useLocale, useTranslations } from 'next-intl';

import type { LocaleCode } from '@lib/router';

const Address = () => {
  const t = useTranslations('general.address');
  const locale = useLocale() as LocaleCode;

  return (
    <>
      Manuel Schächinger<br />
      An der Ottosäule 16<br />
      85521 Ottobrunn
      {'de' !== locale ? <><br />{t('germany')}</> : null}
    </>
  );
};

export default Address;
