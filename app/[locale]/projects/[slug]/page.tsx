import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { IMAGE_HOST } from '@app/config';
import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import DetailBlock from '@components/molecules/DetailBlock';
import ProjectImages, { getImageLabel } from '@components/molecules/ProjectImages';
import ProjectLinks from '@components/molecules/ProjectLinks';
import ProjectMasterData from '@components/molecules/ProjectMasterData';
import PageContainer from '@components/organisms/PageContainer';
import { loadProjectBySlug } from '@lib/contentful';
import { type LocaleCode, l } from '@lib/router';
import { generatePageMeta } from '@lib/seo';

interface Props extends PageProps {
  params: {
    locale: LocaleCode;
    slug: string;
  };
}

export const generateProjectMetadata = async (slug: string, locale: LocaleCode) => {
  const t = await getTranslations('pages.projects.details');
  const project = await loadProjectBySlug(slug, locale);

  let metadata: Metadata = {
    title: t('title'),
  };

  if (project) {
    metadata = generatePageMeta(`/projects/${project.slug}`, locale);
    metadata.title = project.title;
    metadata.description = project.description;
    metadata.openGraph = {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      locale,
      images: (project.images || []).map((image) => ({
        url: `${IMAGE_HOST}/projects/${slug}/${image.src}`,
        alt: getImageLabel(image, locale) || undefined,
        width: 1024,
        height: 576,
      })),
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

      {project.details?.description
        && <DetailBlock id="description" content={project.details.description} />}

      {project.images && <ProjectImages images={project.images} slug={slug} />}

      {project.details?.requirements
        && <DetailBlock id="requirements" content={project.details.requirements} />}

      {project.details?.goal
        && <DetailBlock id="goal" content={project.details.goal} />}

      {project.details?.implementation
        && <DetailBlock id="implementation" content={project.details.implementation} />}

      {project.details?.features
        && <DetailBlock id="features" content={project.details.features} />}

      <ProjectLinks links={project.links} />

      <p className="mt-4">
        <LinkButton href={l('/projects', locale)} label={t('goto.projects')} back />
      </p>
    </PageContainer>
  );
};

export default ProjectPage;
