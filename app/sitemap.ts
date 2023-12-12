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
      url: `${base}/taetigkeit`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.8,
    },
    {
      url: `${base}/kontakt`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.7,
    },
    {
      url: `${base}/lebenslauf`,
      changeFrequency: 'monthly',
      lastModified: modified,
      priority: 0.7,
    },

    // legal
    {
      url: `${base}/impressum`,
      changeFrequency: 'weekly',
      lastModified: modified,
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
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
      url: `${base}/projekte/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: projectModified,
    });
  });

  sitemap.push({
    url: `${base}/projekte/`,
    changeFrequency: 'weekly',
    lastModified: latestProject,
    priority: 0.8,
  });

  return sitemap;
};

export default sitemap;
