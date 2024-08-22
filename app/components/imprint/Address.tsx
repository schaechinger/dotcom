import { useLocale } from 'next-intl';

import { type LanguageCode } from '@lib/i18n';

const Address = () => {
  const locale = useLocale() as LanguageCode;

  return (
    <>
      Manuel Schächinger<br />
      An der Ottosäule 16<br />
      85521 Ottobrunn
      {'de' !== locale ? <><br />Germany</> : null}
    </>
  );
};

export default Address;
