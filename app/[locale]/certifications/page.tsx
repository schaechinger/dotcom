import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { getPageAlternates } from '@/i18n';
import { PageProps } from '@app/interfaces';
import CertificationList from '@components/certifications/CertificationList';
import PageContainer from '@components/organisms/PageContainer';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.certifications');

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
    <PageContainer name="certifications" narrow>
      <section id="certifications">
        <h1 className="text-h1">{t('title')}</h1>

        <CertificationList />
      </section>
    </PageContainer>
  );
};

export default CertificationsPage;
