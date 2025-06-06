import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
import Address from '@components/atoms/Address';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
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

        <h1 className="text-h1">{t('title')}</h1>

        <h2 className="text-h2">{t('owner.title')}</h2>

        <p className="mb-4">
          <Address />
        </p>

        <p className="mb-4">
          <LinkButton href="mailto:manuel@schaechinger.com" label={t('contact.goto')} />
        </p>

        <p>
          <strong className="dark:text-dark-50">{t('odr.title')}:</strong>&nbsp;
          {t.rich('odr.text', {
            link: () => (
              <Link href="https://ec.europa.eu/consumers/odr" inline>ec.europa.eu/consumers/odr</Link>
            ),
            br: () => <br />,
          })}
        </p>
      </PageSection>

      <PageSection id="disclaimer" dense>
        <h2 className="text-h2">{t('liability')}</h2>

        <p className="mb-2">
          <strong className="dark:text-dark-50">{t('disclaimer.title')}:</strong>&nbsp;
          {t('disclaimer.text')}
        </p>

        <p className="mb-2">
          <strong className="dark:text-dark-50">{t('links.title')}:</strong>&nbsp;
          {t('links.text')}
        </p>

        <p className="mb-2">
          <strong className="dark:text-dark-50">{t('copyright.title')}:</strong>&nbsp;
          {t('copyright.text')}
        </p>

        <p>
          <strong className="dark:text-dark-50">{t('violations.title')}:</strong>&nbsp;
          {t('violations.text')}
        </p>
      </PageSection>
    </PageContainer>
  );
};

export default ImprintPage;
