import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import CertificationList from '@components/organisms/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.certifications');

  return {
    ...generatePageMeta('/certifications', locale),
    title: t('title'),
    description: t('description'),
  };
};

const CertificationsPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.certifications');

  return (
    <PageContainer name="certifications" narrow>
      <PageSection id="certifications" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <CertificationList />
      </PageSection>
    </PageContainer>
  );
};

export default CertificationsPage;
