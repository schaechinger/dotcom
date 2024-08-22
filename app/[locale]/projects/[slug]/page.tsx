import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { IMAGE_HOST } from '@app/config';
import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectImages from '@components/projects/ProjectImages';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@lib/contentful';
import { getPageAlternates, type LanguageCode } from '@lib/i18n';

interface Props extends PageProps {
  params: {
    locale: LanguageCode;
    slug: string;
  };
}

export const generateProjectMetadata = async (slug: string, locale: LanguageCode) => {
  const t = await getTranslations('pages.projects.details');
  const project = await loadProjectBySlug(slug, locale);

  const metadata: Metadata = {
    title: t('title'),
  };

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
    metadata.alternates = getPageAlternates(`/projects/${project.slug}`, locale);
    metadata.openGraph = {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      locale,
      images: project.images?.length ? `${IMAGE_HOST}/projects/${slug}/${project.images[0].src}` : undefined,
    };
  }

  return metadata;
};

export const generateMetadata = async ({ params: { locale, slug } }: Props) => (
  generateProjectMetadata(slug, locale)
);

const ProjectPage = async ({ params: { locale, slug} }: Props) => {
  unstable_setRequestLocale(locale);
  const project = await loadProjectBySlug(slug, locale);

  if (!project) {
    return notFound();
  }

  return (
    <div className={`project-page page--${project.slug} pt-4 lg:pt-10`}>
      <ProjectMasterData project={project} />

      { project.details?.description
        && <DetailBlock id="description" title="Worum es geht" content={project.details.description} /> }

      { project.images && <ProjectImages images={project.images} slug={slug} lang={locale} /> }

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
