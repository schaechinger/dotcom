import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import type { LangPageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';
import { getPageAlternates } from '@/app/lib/i18n';

export async function generateMetadata({ params: { lang } }: LangPageProps): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Projektdetails',
  };

  const project = await loadProjectBySlug('transportkit');

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
    metadata.alternates = getPageAlternates(`/projects/${project.slug}`, lang);
  }

  return metadata;
};

const TransportKitPage = async ({ params: { lang } }: LangPageProps) => {
  const project = await loadProjectBySlug('transportkit');

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page pt-4 lg:pt-10">
      <link rel="stylesheet"
        href="https://static.schaechinger.com/projects/transportkit/latest/transportkit.min.css?gc=v4" />

      <ProjectMasterData project={project} lang={lang} />

      { project.details?.description
        && <DetailBlock id="description" title="Was ist TransportKit" content={project.details.description} /> }

      <section id="munich" className="pt-10">
        <h3>München</h3>

        <h4>U-Bahn</h4>
        { ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'].map((line) => (
          <span key={line} className={`transportkit-munich transportkit-munich--${line} transportkit-munich--contrast`}>{ line }</span>
        )) }

        <h4 className="mt-2">S-Bahn</h4>
        { ['s1', 's2', 's3', 's4', 's6', 's7', 's8', 's20'].map((line) => (
          <span key={line} className={`transportkit-munich transportkit-munich--${line} transportkit-munich--contrast`}>{ line }</span>
        )) }

        <h4 className="mt-2">Bus</h4>
        { [['b', '132', '210'], ['bx', 'X30', 'X200'], ['bm', '53'], ['bn', 'N41'],['bnw', 'N80']].map(([type, ...lines]) => (
          lines.map((line) => (
            <span key={`${type}-${line}`} className={`transportkit-munich transportkit-munich--${type} transportkit-munich--contrast`}>{ line }</span>
          ))
        )) }

        <h4 className="mt-2">Tram</h4>
        { [['t', '17', 'N20'], ['tp', '22']].map(([type, ...lines]) => (
          lines.map((line) => (
            <span key={`${type}-${line}`} className={`transportkit-munich transportkit-munich--${type} transportkit-munich--contrast`}>{ line }</span>
          ))
        )) }
        <br />
        { ['12', '15', '16', '17', '18', '19', '20', '21', '22', '23', '25', '27', '28'].map((line) => (
          <span key={line} className={`transportkit-munich transportkit-munich--t${line} transportkit-munich--contrast`}>{ line }</span>
        )) }
      </section>

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href="/projects" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default TransportKitPage;
