import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import NowList from '@components/organisms/NowList';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/now">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.now');

  return {
    ...generatePageMeta('/now', locale),
    title: t('title'),
    description: t('description'),
  };
};

const NowPage = async () => {
  const t = await getTranslations('pages.now');

  return (
    <PageContainer name="now">
      <PageSection id="now" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('pageTitle')} />

        <NowList />
      </PageSection>
    </PageContainer>
  );
};

export default NowPage;
