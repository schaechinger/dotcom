import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import { l } from '@/i18n';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Meine Tätigkeit',
  description: 'Ein Einblick in meine Tätigkeitsfelder sowie meine technischen Fähigkeiten.',
  alternates: {
    canonical: '/work',
    languages: {
      'de': '/work',
    },
  },
};

const WorkPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.work');

  return (
    <div className="work-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="work">
        <h1 className="text-h1">{t('title')}</h1>

        <p className="mb-2">{t('text.0')}</p>

        <p>{t('text.1')}</p>

        <div className="mt-6">
          <h2 className="text-h2">{t('implementation.title')}</h2>

          <p className="mb-2">{t('implementation.text.0')}</p>

          <p>{t('implementation.text.1')}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-h2">{t('concept.title')}</h2>

          <p className="mb-2">{t('concept.text.0')}</p>

          <p>{t('concept.text.1')}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-h2">{t('consulting.title')}</h2>

          <p className="mb-2">{t('consulting.text.0')}</p>

          <p>{t('consulting.text.1')}</p>
        </div>

        <p className="mt-4">
          <LinkButton href={l('/projects', locale)} label={t('goto.projects')} />
        </p>
      </section>

      <section id="stack" className="mt-10">
        <h2 className="text-h1">{t('stack.title')}</h2>

        <div>
          <h3 className="text-h2">{t('stack.frontend')}</h3>
          <div className="border-b border-b-primary-200 pb-1 mb-1">
            Vue, Quasar, Pinia, Sass, ...
          </div>
          <div>
            React, Next.js, Sass, ...
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.backend')}</h3>
          <div className="border-b border-b-primary-200 pb-1 mb-1">
            Node.js, Express, MQTT, ...
          </div>
          <div>
            Strapi, Contentful, ...
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.databases')}</h3>
          <div>
            PostgreSQL, DynamoDB, MongoDB, Neo4j, ...
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.deployment')}</h3>
          <div>
            Docker, GitHub Actions, Jest, Mocha, ...
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.base')}</h3>
          <div>
            Linux, AWS, Traefik, Git, REST, Elasticsearch, Auth0, Jira, Confluence, ...
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
