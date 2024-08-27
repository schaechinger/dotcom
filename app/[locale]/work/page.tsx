import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import Separator from '@components/atoms/Separator';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { l } from '@lib/router';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.work');

  return {
    ...generatePageMeta('/work', locale),
    title: t('title'),
    description: t('description'),
  };
};

const WorkPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.work');

  return (
    <PageContainer name="work" narrow>
      <PageSection id="work" first>
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
      </PageSection>

      <PageSection id="stack">
        <h2 className="text-h1">{t('stack.title')}</h2>

        <div>
          <h3 className="text-h2">{t('stack.frontend')}</h3>
          <div>React, Next.js, Sass, ...</div>
          <Separator />
          <div>Vue, Quasar, Pinia, Sass, ...</div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.backend')}</h3>
          <div>Node.js, Express, MQTT, ...</div>
          <Separator />
          <div>Strapi, Contentful, ...</div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.databases')}</h3>
          <div>PostgreSQL, DynamoDB, MongoDB, Neo4j, ...</div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.deployment')}</h3>
          <div>Docker, GitHub Actions, Jest, Mocha, ...</div>
        </div>

        <div className="mt-6">
          <h3 className="text-h2">{t('stack.base')}</h3>
          <div>Linux, AWS, Traefik, Git, REST, Elasticsearch, Auth0, Jira, Confluence, ...</div>
        </div>
      </PageSection>
    </PageContainer>
  );
};

export default WorkPage;
