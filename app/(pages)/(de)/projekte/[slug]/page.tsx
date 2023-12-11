import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectImages from '@components/projects/ProjectImages';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';

export interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Projektdetails',
  };

  const project = await loadProjectBySlug(params.slug);

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
  }

  return metadata;
};

const ProjectPage = async ({ params }: Props) => {
  const project = await loadProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className={`project-page page--${project.slug} pt-4 lg:pt-10`}>
      <ProjectMasterData project={project} />

      { project.details?.description
        ? <DetailBlock id="beschreibung" title="Worum es geht" content={project.details.description} />
        : null }

      { project.images ? <ProjectImages images={project.images} slug={params.slug} /> : null }

      { project.details?.requirements
        ? <DetailBlock id="anforderungen" title="Anforderungen" content={project.details.requirements} />
        : null }

      { project.details?.goal
        ? <DetailBlock id="ziel" title="Ziel des Projekts" content={project.details.goal} />
        : null }

      { project.details?.implementation
        ? <DetailBlock id="umsetzung" title="Umsetzung des Projekts" content={project.details.implementation} />
        : null }

      { project.details?.features
        ? <DetailBlock id="features" title="Features" content={project.details.features} />
        : null }

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href="/projekte" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default ProjectPage;
