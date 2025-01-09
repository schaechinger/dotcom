import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/organisms/ProjectList';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.projects');

  return {
    ...generatePageMeta('/projects', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ProjectsPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.projects');

  return (
    <PageContainer name="projects" narrow>
      <PageSection id="projects" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <ProjectList heading="h2" />
      </PageSection>
    </PageContainer>
  );
};

export default ProjectsPage;
