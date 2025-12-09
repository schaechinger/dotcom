import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Address from '@components/atoms/Address';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/imprint">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.imprint');

  return {
    ...generatePageMeta('/imprint', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ImprintPage = async () => {
  const t = await getTranslations('pages.imprint');

  return (
    <PageContainer name="imprint">
      <PageSection id="imprint" first dense>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <Heading level={2} title={t('owner.title')} />

        <p className="mb-4">
          <Address />
        </p>

        <p className="mb-4">
          <LinkButton href="mailto:manuel@schaechinger.com" label={t('contact.goto')} />
        </p>

        <p>
          <strong className="dark:text-contrast-50">{t('odr.title')}:</strong>&nbsp;
          {t.rich('odr.text', {
            link: () => (
              <Link href="https://ec.europa.eu/consumers/odr" inline>ec.europa.eu/consumers/odr</Link>
            ),
            br: () => <br />,
          })}
        </p>
      </PageSection>

      <PageSection id="disclaimer" dense>
        <Heading level={2} title={t('liability')} />

        <p className="mb-2">
          <strong className="dark:text-contrast-50">{t('disclaimer.title')}:</strong>&nbsp;
          {t('disclaimer.text')}
        </p>

        <p className="mb-2">
          <strong className="dark:text-contrast-50">{t('links.title')}:</strong>&nbsp;
          {t('links.text')}
        </p>

        <p className="mb-2">
          <strong className="dark:text-contrast-50">{t('copyright.title')}:</strong>&nbsp;
          {t('copyright.text')}
        </p>

        <p>
          <strong className="dark:text-contrast-50">{t('violations.title')}:</strong>&nbsp;
          {t('violations.text')}
        </p>
      </PageSection>
    </PageContainer>
  );
};

export default ImprintPage;
