import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/organisms/ProjectList';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/projects">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.projects');

  return {
    ...generatePageMeta('/projects', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ProjectsPage = async () => {
  const t = await getTranslations('pages.projects');

  return (
    <PageContainer name="projects">
      <PageSection id="projects" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <ProjectList heading="h2" />
      </PageSection>
    </PageContainer>
  );
};

export default ProjectsPage;
