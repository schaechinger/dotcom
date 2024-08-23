import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { l } from '@/i18n';
import { STATIC_HOST } from '@app/config';
import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';

import { generateProjectMetadata } from '../[slug]/page';

const slug = 'transportkit';

export const generateMetadata = async ({ params: { locale } }: PageProps) => (
  generateProjectMetadata(slug, locale)
);

const TransportKitPage = async ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.projects.details');
  const project = await loadProjectBySlug(slug, locale);

  if (!project) {
    return notFound();
  }

  return (
    <PageContainer name={`${slug}-project-page`}>
      <link rel="stylesheet"
        href={`${STATIC_HOST}/projects/transportkit/latest/transportkit.min.css?gc=v4`} />
      <ProjectMasterData project={project} />

      { project.details?.description
        && <DetailBlock id="description" content={project.details.description} /> }

      <section id="munich" className="pt-10">
        <h2 className="text-h2">München</h2>

        <h3 className="text-h3">U-Bahn</h3>
        { ['u1', 'u2', 'u3', 'u4', 'u5', 'u6', 'u7', 'u8'].map((line) => (
          <span key={line} className={`transportkit-munich transportkit-munich--${line} transportkit-munich--contrast`}>{ line }</span>
        )) }

        <h3 className="text-h3 mt-2">S-Bahn</h3>
        { ['s1', 's2', 's3', 's4', 's6', 's7', 's8', 's20'].map((line) => (
          <span key={line} className={`transportkit-munich transportkit-munich--${line} transportkit-munich--contrast`}>{ line }</span>
        )) }

        <h3 className="text-h3 mt-2">Bus</h3>
        { [['b', '132', '210'], ['bx', 'X30', 'X200'], ['bm', '53'], ['bn', 'N41'],['bnw', 'N80']].map(([type, ...lines]) => (
          lines.map((line) => (
            <span key={`${type}-${line}`} className={`transportkit-munich transportkit-munich--${type} transportkit-munich--contrast`}>{ line }</span>
          ))
        )) }

        <h3 className="text-h3 mt-2">Tram</h3>
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
        <LinkButton href={l('/projects', locale)} label={t('goto.projects')} back />
      </p>
    </PageContainer>
  );
};

export default TransportKitPage;
