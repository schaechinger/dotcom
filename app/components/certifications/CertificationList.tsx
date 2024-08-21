import type { ComponentProps } from '@app/interfaces';
import CertificationItem from '@components/certifications/CertificationItem';
import { loadCertifications } from '@lib/contentful';
import { _t, loadTranslations } from '@lib/i18n';

const CertificationList = async ({ lang }: ComponentProps) => {
  const translations = await loadTranslations('components.careerList', lang);
  const certifications = await loadCertifications(lang) || [];

  return (
    <div className="-mt-4">
      {certifications.map((c) => (
        <CertificationItem key={c.slug} item={c} lang={lang} />
      ))}
      { (!certifications.length)
        ? <p className="py-4">{_t('error', translations, lang)}</p>
        : '' }
    </div>
  );
};

export default CertificationList;
