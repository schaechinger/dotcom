import { getLocale, getTranslations } from 'next-intl/server';

import { type LanguageCode } from '@/i18n';
import CertificationItem from '@components/certifications/CertificationItem';
import HistoryItemList from '@components/organisms/HistoryItemList';
import { loadCertifications } from '@lib/contentful';

const CertificationList = async () => {
  const t = await getTranslations('certificationList');
  const locale = await getLocale() as LanguageCode;
  const certifications = await loadCertifications(locale) || [];

  return (
    <HistoryItemList
      items={certifications.map((c) => (
        <CertificationItem key={c.slug} item={c} />
      ))}
      error={t('error')}
    />
  );
};

export default CertificationList;
