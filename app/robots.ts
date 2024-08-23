import type { MetadataRoute } from 'next'

import { WEB_HOST } from '@app/config';
import { isProd } from '@app/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const robots = (): MetadataRoute.Robots => {
  let allow: string | undefined = '/';
  let disallow = '/downloads/';

  if (!isProd()) {
    allow = undefined;
    disallow = '/';
  }

  return {
    rules: {
      userAgent: '*',
      allow,
      disallow,
    },
    sitemap: `${WEB_HOST}/sitemap.xml`,
  };
};

export default robots;
