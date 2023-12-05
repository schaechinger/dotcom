import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import CompanyLink from '@/app/components/career/CompanyLink';
import TechItem from '@/app/components/career/TechItem';
import TimeSpan from '@/app/components/career/TimeSpan';
import DetailBlock from '@/app/components/projects/DetailBlock';
import { getDatabase } from '@/app/lib/db/factory';
import LinkButton from '@/app/components/LinkButton';

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

  const project = await getDatabase()?.loadProjectBySlug(params.slug);

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
  }

  return metadata;
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project = await getDatabase()?.loadProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className={`project-page page--${project.slug} pt-4 lg:pt-10`}>
      <section id={project.slug}>
        <h2>{ project.title }</h2>

        <p className="mb-2">{ project.description }</p>

        <p className="mb-2">
          Zeitspanne: <TimeSpan startDate={project.startDate} endDate={project.endDate} />
        </p>

        { project.company
          ? <p className="mb-2">Firma: <CompanyLink company={project.company} /></p>
          : null }

        <ul className="flex flex-wrap mt-3 gap-2">
          { (project.tech || []).map((t) => (
            <TechItem key={t.slug} item={t} />
          ))}
        </ul>
      </section>

      { project.details?.requirements
        ? <DetailBlock id="anforderungen" title="Anforderungen" content={project.details.requirements} />
        : null }

      { project.details?.implementation
        ? <DetailBlock id="umsetzung" title="Umsetzung des Projekts" content={project.details.implementation} />
        : null }

      { project.links
        ? <section id="links" className="pt-10">
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
        </section>
        : null
      }

      <p className="mt-4">
        <LinkButton href="/projekte" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default ProjectPage;
