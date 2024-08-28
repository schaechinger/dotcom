import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import JsonLd from '@components/atoms/JsonLd';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/projects/ProjectList';
import { generateBreadcrumbJson, generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.projects');

  return {
    ...generatePageMeta('/projects', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ProjectsPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.projects');

  const jsonLd = generateBreadcrumbJson([{ title: t('title') }], locale);

  return (
    <>
      <PageContainer name="projects" narrow>
        <PageSection id="projects" first>
          <h1 className="text-h1">{t('title')}</h1>

          <ProjectList heading="h2" />
        </PageSection>
      </PageContainer>

      <JsonLd json={jsonLd} />
    </>
  );
};

export default ProjectsPage;
