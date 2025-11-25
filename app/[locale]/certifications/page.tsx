import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import CertificationList from '@components/organisms/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/certifications">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.certifications');

  return {
    ...generatePageMeta('/certifications', locale),
    title: t('title'),
    description: t('description'),
  };
};

const CertificationsPage = async () => {
  const t = await getTranslations('pages.certifications');

  return (
    <PageContainer name="certifications">
      <PageSection id="certifications" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <CertificationList />
      </PageSection>
    </PageContainer>
  );
};

export default CertificationsPage;
