import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { STATIC_HOST } from '@app/config';
import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import DetailBlock from '@components/molecules/DetailBlock';
import ProjectLinks from '@components/molecules/ProjectLinks';
import ProjectMasterData from '@components/molecules/ProjectMasterData';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { loadProjectBySlug } from '@lib/contentful';
import { generateProjectMetadata } from '@lib/projects';

import TransportKitLine from './TransportKitLine';

const slug = 'transportkit';

export const generateMetadata = async ({ params }: PageProps) => {
  const { locale } = await params;

  return generateProjectMetadata(slug, locale)
};

const TransportKitPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const [project, t] = await Promise.all([
    loadProjectBySlug(slug, locale),
    getTranslations('pages.projects.details'),
  ]);

  if (!project) {
    return notFound();
  }

  const city = 'munich';

  return (
    <PageContainer name={`${slug}-project-page`}>
      <link rel="stylesheet"
        href={`${STATIC_HOST}/projects/transportkit/latest/transportkit.min.css?gc=v4`} />
      <ProjectMasterData project={project} />

      {project.details?.description
        && <DetailBlock id="description" content={project.details.description} />}

      <PageSection id="munich" dense>
        <h2 className="text-h2">{t('slug.transportkit.munich')}</h2>

        <h3 className="text-h3">U-Bahn</h3>
        { ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'].map((line) => (
          <TransportKitLine key={line} city={city} line={line} label={line} />
        )) }

        <h3 className="text-h3 mt-2">S-Bahn</h3>
        { ['s1', 's2', 's3', 's4', 's6', 's7', 's8', 's20'].map((line) => (
          <TransportKitLine key={line} city={city} line={line} label={line} />
        )) }

        <h3 className="text-h3 mt-2">Bus</h3>
        { [['b', '132', '210'], ['bx', 'X30', 'X200'], ['bm', '53'], ['bn', 'N41'],['bnw', 'N80']].map(([type, ...lines]) => (
          lines.map((line) => (
            <TransportKitLine key={`${type}-${line}`} city={city} line={type} label={line} />
          ))
        )) }

        <h3 className="text-h3 mt-2">Tram</h3>
        { [['t', '17', 'N20'], ['tp', '22']].map(([type, ...lines]) => (
          lines.map((line) => (
            <TransportKitLine key={`${type}-${line}`} city={city} line={type} label={line} />
          ))
        )) }
        <br />
        { ['12', '15', '16', '17', '18', '19', '20', '21', '22', '23', '25', '27', '28'].map((line) => (
          <TransportKitLine key={line} city={city} line={`t${line}`} label={line} />
        )) }
      </PageSection>

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href="/projects" label={t('goto.projects')} back />
      </p>
    </PageContainer>
  );
};

export default TransportKitPage;
