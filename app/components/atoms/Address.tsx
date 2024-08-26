import { useLocale, useTranslations } from 'next-intl';

import { type LanguageCode } from '@/i18n';

const Address = () => {
  const t = useTranslations('general.address');
  const locale = useLocale() as LanguageCode;

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
