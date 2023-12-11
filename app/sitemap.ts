import type { MetadataRoute } from 'next';

import { loadProjects } from '@lib/contentful';
import { ProjectData } from './models/project';

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
    {
      url: `${base}/projekte/`,
      changeFrequency: 'weekly',
      lastModified: modified,
      priority: 0.8,
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

  projects?.forEach((project) => {
    sitemap.push({
      url: `${base}/projekte/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(project.endDate || project.startDate),
    });
  });

  return sitemap;
};

export default sitemap;
