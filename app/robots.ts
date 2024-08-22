import type { MetadataRoute } from 'next'

import { WEB_HOST } from '@app/config';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      ['production' === process.env.NODE_ENV ? 'allow' : 'disallow']: '/',
      disallow: '/downloads/',
    },
    sitemap: `${WEB_HOST}/sitemap.xml`,
  };
};

export default robots;
