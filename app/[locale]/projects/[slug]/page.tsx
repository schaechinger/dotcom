import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import DetailBlock from '@components/molecules/DetailBlock';
import ProjectImages from '@components/molecules/ProjectImages';
import ProjectLinks from '@components/molecules/ProjectLinks';
import ProjectMasterData from '@components/molecules/ProjectMasterData';
import PageContainer from '@components/organisms/PageContainer';
import { loadProjectBySlug } from '@lib/contentful';
import { generateProjectMetadata } from '@lib/projects';
import { type LocaleCode } from '@lib/router';

interface Props extends PageProps {
  params: {
    locale: LocaleCode;
    slug: string;
  };
}

export const generateMetadata = async ({ params: { locale, slug } }: Props) => (
  generateProjectMetadata(slug, locale)
);

const ProjectPage = async ({ params: { locale, slug } }: Props) => {
  unstable_setRequestLocale(locale);
  const [project, t] = await Promise.all([
    loadProjectBySlug(slug, locale),
    getTranslations('pages.projects.details'),
  ]);

  if (!project) {
    return notFound();
  }

  return (
    <PageContainer name={`${project.slug}-project`} narrow>
      <ProjectMasterData project={project} />

      {project.details?.description
        && <DetailBlock id="description" content={project.details.description} />}

      {project.images && <ProjectImages images={project.images} slug={slug} />}

      {project.details?.requirements
        && <DetailBlock id="requirements" content={project.details.requirements} />}

      {project.details?.goal
        && <DetailBlock id="goal" content={project.details.goal} />}

      {project.details?.implementation
        && <DetailBlock id="implementation" content={project.details.implementation} />}

      {project.details?.features
        && <DetailBlock id="features" content={project.details.features} />}

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href="/projects" label={t('goto.projects')} back />
      </p>
    </PageContainer>
  );
};

export default ProjectPage;
