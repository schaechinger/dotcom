import { supportedLangs, WEB_HOST } from '@app/config';
import { isProd } from '@app/utils';
import { type LocaleCode } from '@lib/router';

const wrapJson = (type: string, json: any) => ({
  '@context': 'https://schema.org',
  '@type': type,
  ...json,
});

export type BreadcrumbData = {
  page?: string;
  title: string;
};

export const generateBreadcrumbJson = (breadcrumbs: BreadcrumbData[], locale: LocaleCode) => wrapJson(
  'BreadcrumbList',
  {
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.title,
      item: item.page && `${WEB_HOST}/${locale}${item.page}`,
    })),
  },
);

export const generateProfileJson = () => wrapJson(
  'ProfilePage',
  {
    mainEntity: {
      '@type': 'Person',
      name: 'Manuel Schächinger',
      jobTitle: 'Senior Software Engineer',
      nationality: 'German',
      image: `${WEB_HOST}/images/schaechinger.jpg`,
      email: 'manuel@schaechinger.com',
      url: 'https://www.schaechinger.com',
      sameAs: [
        'https://instagram.com/theschaechinger',
        'https://linkedin.com/in/schaechinger',
        'https://xing.com/profile/Manuel_Schaechinger',
        'https://github.com/schaechinger',
      ],
    },
  },
);

export const generatePageMeta = (identifier: string, locale: LocaleCode) => {
  const languages: Record<string, string> = {};
  supportedLangs.forEach((lang) => {
    languages[lang] = `${WEB_HOST}/${locale}${identifier.replace(/\/+$/, '')}`;
  });

  return {
    alternates: {
      canonical: languages[locale],
      languages,
    },
    robots: {
      index: isProd(),
    },
  };
};

