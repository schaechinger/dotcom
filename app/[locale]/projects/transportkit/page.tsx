import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { STATIC_HOST } from '@app/config';
import LinkButton from '@components/atoms/LinkButton';
import DetailBlock from '@components/molecules/DetailBlock';
import ProjectLinks from '@components/molecules/ProjectLinks';
import ProjectMasterData from '@components/molecules/ProjectMasterData';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { loadProjectBySlug } from '@dal/projects';
import { generateProjectMetadata } from '@lib/projects';
import type { LocaleCode } from '@lib/router';

import TransportKitLine from './TransportKitLine';
import Heading from '@/app/components/atoms/Heading';

const slug = 'transportkit';

type Props = PageProps<"/[locale]/projects/transportkit">;

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;

  return generateProjectMetadata(slug, locale as LocaleCode)
};

const TransportKitPage = async ({ params }: Props) => {
  const { locale } = await params;
  const [project, t] = await Promise.all([
    loadProjectBySlug(slug, locale as LocaleCode),
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
        <Heading level={2} title={t('slug.transportkit.munich')} />

        <Heading level={3} title="U-Bahn" />
        { ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'].map((line) => (
          <TransportKitLine key={line} city={city} line={line} label={line} />
        )) }

        <Heading level={3} className="mt-2" title="S-Bahn" />
        { ['s1', 's2', 's3', 's4', 's6', 's7', 's8', 's20'].map((line) => (
          <TransportKitLine key={line} city={city} line={line} label={line} />
        )) }

        <Heading level={3} className="mt-2" title="Bus" />
        { [['b', '132', '210'], ['bx', 'X30', 'X200'], ['bm', '53'], ['bn', 'N41'],['bnw', 'N80']].map(([type, ...lines]) => (
          lines.map((line) => (
            <TransportKitLine key={`${type}-${line}`} city={city} line={type} label={line} />
          ))
        )) }

        <Heading level={3} className="mt-2" title="Tram" />
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
