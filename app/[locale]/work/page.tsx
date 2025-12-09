import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import Separator from '@components/atoms/Separator';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/work">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.work');

  return {
    ...generatePageMeta('/work', locale),
    title: t('title'),
    description: t('description'),
  };
};

const WorkPage = async () => {
  const t = await getTranslations('pages.work');

  return (
    <PageContainer name="work">
      <PageSection id="work" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <p className="mb-2">{t('text.0')}</p>
        <p>{t('text.1')}</p>

        <div className="mt-6">
          <Heading level={2} title={t('implementation.title')} />

          <p className="mb-2">{t('implementation.text.0')}</p>
          <p>{t('implementation.text.1')}</p>
        </div>

        <div className="mt-6">
          <Heading level={2} title={t('concept.title')} />

          <p className="mb-2">{t('concept.text.0')}</p>
          <p>{t('concept.text.1')}</p>
        </div>

        <div className="mt-6">
          <Heading level={2} title={t('consulting.title')} />

          <p className="mb-2">{t('consulting.text.0')}</p>
          <p>{t('consulting.text.1')}</p>
        </div>

        <p className="mt-4">
          <LinkButton href="/projects" label={t('goto.projects')} />
        </p>
      </PageSection>

      <PageSection id="stack">
        <Heading level={1} tag="h2" title={t('stack.title')} />

        <div>
          <Heading level={2} tag="h3" title={t('stack.frontend')} />
          <div>React, Next.js, SCSS, ...</div>
          <Separator />
          <div>Vue, Quasar, Pinia, SCSS, ...</div>
        </div>

        <div className="mt-6">
          <Heading level={2} tag="h3" title={t('stack.backend')} />
          <div>Node.js, Express, MQTT, ...</div>
          <Separator />
          <div>Strapi, Contentful, ...</div>
        </div>

        <div className="mt-6">
          <Heading level={2} tag="h3" title={t('stack.databases')} />
          <div>PostgreSQL, DynamoDB, MongoDB, Neo4j, ...</div>
        </div>

        <div className="mt-6">
          <Heading level={2} tag="h3" title={t('stack.deployment')} />
          <div>Docker, GitHub Actions, Jest, Mocha, ...</div>
        </div>

        <div className="mt-6">
          <Heading level={2} tag="h3" title={t('stack.base')} />
          <div>Linux, AWS, Traefik, Git, REST, Elasticsearch, OAuth, Jira, Confluence, ...</div>
        </div>
      </PageSection>
    </PageContainer>
  );
};

export default WorkPage;
