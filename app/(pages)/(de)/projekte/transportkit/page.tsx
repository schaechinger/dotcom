import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Projektdetails',
  };

  const project = await loadProjectBySlug('transportkit');

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
  }

  return metadata;
};

const TransportKitPage = async () => {
  const project = await loadProjectBySlug('transportkit');

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page pt-4 lg:pt-10">
      <link rel="stylesheet"
        href="https://static.schaechinger.com/projects/transportkit/latest/transportkit.min.css?gc=v4" />

      <ProjectMasterData project={project} />

      { project.details?.description
        ? <DetailBlock id="beschreibung" title="Was ist TransportKit" content={project.details.description} />
        : null }

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
        <LinkButton href="/projekte" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default TransportKitPage;
