import type { MetadataRoute } from 'next';

import { supportedLangs, WEB_HOST } from '@app/config';
import { loadProjects } from '@lib/contentful';
import { generatePageMeta } from '@lib/seo';

export const dynamic = 'force-dynamic';

const modified = new Date();

const sitemap = async () => {
  const sitemap: MetadataRoute.Sitemap = [];

  ([
    { page: '', freq: 'weekly', priority: 1 },
    { page: '/resume', freq: 'monthly', priority: 0.9 },
    { page: '/work', freq: 'monthly', priority: 0.8 },
    { page: '/projects', freq: 'weekly', priority: 0.8 },
    { page: '/about', freq: 'monthly', priority: 0.7 },
    { page: '/contact', freq: 'monthly', priority: 0.6 },
    { page: '/certifications', freq: 'monthly', priority: 0.6 },
    { page: '/sports', freq: 'monthly', priority: 0.7 },
    // legal
    { page: '/imprint', freq: 'monthly', priority: 0.3 },
    { page: '/privacy', freq: 'monthly', priority: 0.3 },
  ] as { page: string; freq: 'weekly' | 'monthly', priority: number }[])
    .forEach(({ page, freq, priority }) => {
      supportedLangs.forEach((locale) => {
        const { alternates } = generatePageMeta(page, locale);

        sitemap.push({
          url: `${WEB_HOST}/${locale}${page}`,
          lastModified: modified,
          changeFrequency: freq,
          priority,
          alternates: { languages: alternates.languages },
        });
      });
    });

  const projects = await loadProjects();
  let latestProject = modified;

  projects?.forEach((project) => {
    const projectModified = new Date(project.endDate || project.startDate);
    if (latestProject.getTime() < projectModified.getTime()) {
      latestProject = projectModified;
    }

    supportedLangs.forEach((locale) => {
      const page = `/projects/${project.slug}`;
      const { alternates } = generatePageMeta(page, locale);

      sitemap.push({
        url: `${WEB_HOST}/${locale}${page}`,
        lastModified: projectModified,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: alternates.languages },
      });
    });
  });

  return sitemap;
};

export default sitemap;
