import type { MetadataRoute } from 'next';

import { supportedLangs, WEB_HOST } from '@app/config';
import { loadProjects } from '@dal/projects';
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
    { page: '/certifications', freq: 'monthly', priority: 0.7 },
    { page: '/sports', freq: 'monthly', priority: 0.7 },
    { page: '/now', freq: 'weekly', priority: 0.7 },
    // legal
    { page: '/imprint', freq: 'monthly', priority: 0.3 },
    { page: '/privacy', freq: 'monthly', priority: 0.3 },
  ] as { page: string; freq: 'weekly' | 'monthly', priority: number }[])
    .forEach(({ page, freq, priority }) => {
      supportedLangs.forEach((locale) => {
        const { alternates } = generatePageMeta(page, locale);
        const languages = alternates?.languages ?? {};
        if (languages['x-default']) {
          delete languages['x-default'];
        }

        sitemap.push({
          url: `${WEB_HOST}/${locale}${page}`,
          lastModified: modified,
          changeFrequency: freq,
          priority,
          alternates: { languages: languages as { de: string } },
        });
      });
    });

  const projects = await loadProjects("en");
  let latestProject = new Date(0);

  projects?.forEach((project) => {
    const projectModified = new Date(project.updatedAt || project.endDate || project.startDate);
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
        priority: project.highlight ? 0.8 : 0.7,
        alternates: { languages: (alternates?.languages ?? {}) as { de: string } },
      });
    });
  });

  return sitemap;
};

export default sitemap;
