import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import LinkButton from '@components/atoms/LinkButton';
import DetailBlock from '@components/molecules/DetailBlock';
import ProjectImages from '@components/molecules/ProjectImages';
import ProjectLinks from '@components/molecules/ProjectLinks';
import ProjectMasterData from '@components/molecules/ProjectMasterData';
import PageContainer from '@components/organisms/PageContainer';
import { loadProjectBySlug } from '@lib/contentful';
import { generateProjectMetadata } from '@lib/projects';
import type { LocaleCode } from '@lib/router';

type Props = PageProps<"/[locale]/projects/[slug]">;

export const generateMetadata = async ({ params }: Props) => {
  const { locale, slug } = await params;

  return generateProjectMetadata(slug, locale as LocaleCode)
};

const ProjectPage = async ({ params }: Props) => {
  const { locale, slug } = await params;
  const [project, t] = await Promise.all([
    loadProjectBySlug(slug, locale as LocaleCode),
    getTranslations('pages.projects.details'),
  ]);

  if (!project) {
    return notFound();
  }

  return (
    <PageContainer name={`${project.slug}-project`}>
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
