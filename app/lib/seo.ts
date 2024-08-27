import { l, LanguageCode } from '@/i18n';
import { WEB_HOST } from '@app/config';

const wrapJson = (type: string, json: any) => ({
  '@context': 'https://schema.org',
  '@type': type,
  ...json,
});

type BreadcrumbData = {
  page?: string;
  title: string;
};

export const generateBreadcrumbJson = (breadcrumbs: BreadcrumbData[], locale: LanguageCode) => wrapJson(
  'BreadcrumbList',
  {
    itemListElement: breadcrumbs.map((data, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: data.title,
      item: data.page && `${WEB_HOST}${l(data.page, locale)}`,
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
      alternateName: 'schaechinger',
    },
  },
);
