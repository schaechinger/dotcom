import type { MetadataRoute } from 'next'
import { headers } from 'next/headers';

import { WEB_HOST } from '@app/config';
import { isProd } from '@app/utils';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const robots = async (): Promise<MetadataRoute.Robots> => {
  // force dynamic to get correct web host
  headers();

  let allow: string | undefined = '/';
  let disallow = ['/downloads/', '/brandbook'];

  if (!isProd()) {
    allow = undefined;
    disallow = ['/'];
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
