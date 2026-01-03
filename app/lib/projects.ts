import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { IMAGE_HOST } from '@app/config';
import { loadProjectBySlug } from '@dal/projects';
import { getImageLabel } from '@lib/images';
import type { LocaleCode } from '@lib/router';
import { generatePageMeta } from '@lib/seo';

export const generateProjectMetadata = async (slug: string, locale: LocaleCode) => {
  const [project, t] = await Promise.all([
    loadProjectBySlug(slug, locale),
    getTranslations('pages.projects.details'),
  ]);

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
      images: project.images?.length ? project.images.map((image) => ({
        url: `${IMAGE_HOST}/projects/${slug}/${image.src}`,
        alt: getImageLabel(image, locale) || undefined,
        width: 1024,
        height: 768,
      })) : undefined,
    };
  }

  return metadata;
};
