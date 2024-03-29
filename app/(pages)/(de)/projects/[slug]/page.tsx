import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { locale } from '@/app/utils';
import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectImages from '@components/projects/ProjectImages';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';

export type Props = {
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
    metadata.alternates = {
      canonical: `/projects/${project.slug}`,
      languages: {
        'de': `/projects/${project.slug}`,
      },
    };
    metadata.openGraph = {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      locale,
    };
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
        && <DetailBlock id="description" title="Worum es geht" content={project.details.description} /> }

      { project.images && <ProjectImages images={project.images} slug={params.slug} /> }

      { project.details?.requirements
        && <DetailBlock id="requirements" title="Anforderungen" content={project.details.requirements} /> }

      { project.details?.goal
        && <DetailBlock id="goal" title="Ziel des Projekts" content={project.details.goal} /> }

      { project.details?.implementation
        && <DetailBlock id="implementation" title="Umsetzung des Projekts" content={project.details.implementation} /> }

      { project.details?.features
        && <DetailBlock id="features" title="Features" content={project.details.features} /> }

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href="/projects" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default ProjectPage;
