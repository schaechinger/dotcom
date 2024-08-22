import CertificationItem from '@components/certifications/CertificationItem';
import { loadCertifications } from '@lib/contentful';
import { type LanguageCode } from '@lib/i18n';
import { getLocale, getTranslations } from 'next-intl/server';

const CertificationList = async () => {
  const t = await getTranslations('certificationList');
  const locale = await getLocale() as LanguageCode;
  const certifications = await loadCertifications(locale) || [];

  return (
    <div className="-mt-4">
      {certifications.map((c) => (
        <CertificationItem key={c.slug} item={c} />
      ))}
      { (!certifications.length)
        ? <p className="py-4">{t('error')}</p>
        : '' }
    </div>
  );
};

export default CertificationList;
