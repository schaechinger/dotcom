import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { loadProjectBySlug } from '@/app/lib/projects';

interface ProjectPageProps {
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


  // TODO: load from db
  // TODO: update meta

  return (
    <div className={`project-page page--${project.slug} pt-4 lg:pt-10`}>
      <section id={project.slug}>
        <h2>{ project.title }</h2>

        <p>{ project.description }</p>
      </section>

      <section id="intro" className="pt-10">
        <h3>Was ist { project.title }</h3>

        <p>...</p>
      </section>

      <section id="ziele" className="pt-10">
        <h3>Ziel des Projekts</h3>

        <p>...</p>
      </section>

      <section id="features" className="pt-10">
        <h3>Features</h3>

        <p>...</p>
      </section>

      { project.links
        ? <section id="links" className="pt-10">
            <h3>Links</h3>

            { project.links?.project
              ? <p>Das Projekt können Sie <Link href={project.links.project}
                target="_blank">hier</Link> ansehen.</p>
              : null
            }
            { project.links?.code
              ? <p>Den Code zum Projekt finden Sie auf <Link href={project.links.code}
                target="_blank">GitHub</Link></p>
              : null
            }
        </section>
        : null
      }
    </div>
  );
};

export default ProjectPage;
