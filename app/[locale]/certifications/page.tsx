import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { PageProps } from '@app/interfaces';
import CertificationList from '@components/certifications/CertificationList';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { getPageAlternates } from '@/app/lib/i18n';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.projects');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/certifications', locale),
  };
};

const CertificationsPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.certifications');

  return (
    <div className="certifications-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="certifications">
        <h1>{t('title')}</h1>

        <CertificationList />
      </section>
    </div>
  );
};

export default CertificationsPage;
