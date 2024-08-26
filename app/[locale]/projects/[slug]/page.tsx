import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { l, getPageAlternates, type LanguageCode } from '@/i18n';
import { IMAGE_HOST } from '@app/config';
import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import DetailBlock from '@components/projects/DetailBlock';
import ProjectImages from '@components/projects/ProjectImages';
import ProjectLinks from '@components/projects/ProjectLinks';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug, loadProjects } from '@lib/contentful';

interface Props extends PageProps {
  params: {
    locale: LanguageCode;
    slug: string;
  };
}

export const generateStaticParams = async ({ params: { locale } }: Props) => {
  const projects = await loadProjects(locale);

  return (projects || []).map((project) => ({ locale, slug: project.slug }));
};

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

const ProjectPage = async ({ params: { locale, slug } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.projects.details');
  const project = await loadProjectBySlug(slug, locale);

  if (!project) {
    return notFound();
  }

  return (
    <PageContainer name={`${project.slug}-project`}>
      <ProjectMasterData project={project} />

      { project.details?.description
        && <DetailBlock id="description" content={project.details.description} /> }

      { project.images && <ProjectImages images={project.images} slug={slug} /> }

      { project.details?.requirements
        && <DetailBlock id="requirements" content={project.details.requirements} /> }

      { project.details?.goal
        && <DetailBlock id="goal" content={project.details.goal} /> }

      { project.details?.implementation
        && <DetailBlock id="implementation" content={project.details.implementation} /> }

      { project.details?.features
        && <DetailBlock id="features" content={project.details.features} /> }

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href={l('/projects', locale)} label={t('goto.projects')} back />
      </p>
    </PageContainer>
  );
};

export default ProjectPage;
