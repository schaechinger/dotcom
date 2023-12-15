import type { MetadataRoute } from 'next';

import { loadProjects } from '@lib/contentful';

export const dynamic = 'force-dynamic';

const base = 'https://www.schaechinger.com';
const modified = new Date();

const sitemap = async () => {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: base,
      changeFrequency: 'weekly',
      lastModified: modified,
      priority: 1,
    },
    {
      url: `${base}/work`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.6,
    },
    {
      url: `${base}/resume`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.7,
    },

    // legal
    {
      url: `${base}/imprint`,
      changeFrequency: 'weekly',
      lastModified: modified,
      priority: 0.3,
    },
    {
      url: `${base}/privacy`,
      changeFrequency: 'weekly',
      lastModified: modified,
      priority: 0.3,
    },
  ];

  const projects = await loadProjects();
  let latestProject = modified;

  projects?.forEach((project) => {
    const projectModified = new Date(project.endDate || project.startDate);
    if (latestProject.getTime() < projectModified.getTime()) {
      latestProject = projectModified;
    }

    sitemap.push({
      url: `${base}/projects/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: projectModified,
    });
  });

  sitemap.push({
    url: `${base}/projects/`,
    changeFrequency: 'weekly',
    lastModified: latestProject,
    priority: 0.8,
  });

  return sitemap;
};

export default sitemap;
