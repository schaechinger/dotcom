import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectImages from '@components/projects/ProjectImages';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';

export interface ProjectPageProps {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
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

const ProjectPage = async ({ params }: ProjectPageProps) => {
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

      <section id="links" className="pt-10">
        <h3>Links</h3>

        { project.links?.project
          ? <p>Das Projekt finden Sie auf <Link href={project.links.project.link}
            target="_blank" className="inline-link">{ project.links.project.label }</Link>.</p>
          : null
        }
        { project.links?.code
          ? <p>Den Code zum Projekt finden Sie auf <Link href={project.links.code.link}
            target="_blank" className="inline-link">{ project.links.code.label }</Link>.</p>
          : null
        }
        { project.links?.package
          ? <p>Sie können das Paket mit <Link href={project.links.package.link}
            target="_blank" className="inline-link">{ project.links.package.label }</Link> in Ihr Projekt einbinden.</p>
          : null
        }

        { !project.links
          ? <p>Das Projekt wird intern verwendet und ist daher nicht öffentlich zugänglich.</p>
          : null }
      </section>

      <p className="mt-4">
        <LinkButton href="/projekte" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default ProjectPage;
