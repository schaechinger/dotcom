import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Address from '@components/atoms/Address';
import BulletList from '@components/atoms/BulletList';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.privacy');

  return {
    ...generatePageMeta('/privacy', locale),
    title: t('title'),
    description: t('description'),
  };
};

const PrivacyPage = async () => {
  const t = await getTranslations('pages.privacy');

  return (
    <PageContainer name="privacy">
      <PageSection id="privacy" first dense>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <Heading level={2} title={t('overview')} />

        <BulletList>
          <Link href="#responsible">{t('responsible.title')}</Link>
          <Link href="#revocation">{t('revokation.title')}</Link>
          <Link href="#complaint">{t('complaint.title')}</Link>
          <Link href="#data-transfer">{t('dataTransfer.title')}</Link>
          <Link href="#information">{t('information.title')}</Link>
          <Link href="#ssl">{t('ssl.title')}</Link>
          <Link href="#logs">{t('logs.title')}</Link>
          <Link href="#contact">{t('contact.title')}</Link>
          <Link href="#cookies">{t('cookies.title')}</Link>
        </BulletList>
      </PageSection>

      <PageSection id="responsible" dense>
        <Heading level={2} title={t('responsible.title')} />

        <p className="mb-4">
          <Address />
        </p>

        <p>
          <LinkButton href="/imprint" label={t('responsible.goto.imprint')} />
        </p>
      </PageSection>

      <PageSection id="revokation" dense>
        <Heading level={2} title={t('revokation.title')} />

        <p>{t('revokation.text')}</p>
      </PageSection>

      <PageSection id="complaint" dense>
        <Heading level={2} title={t('complaint.title')} />

        <p>{t.rich('complaint.text', {
          link: (link) => (
            <Link href={(link as string[])[0]} inline>www.bfdi.bund.de</Link>
          ),
        })}</p>
      </PageSection>

      <PageSection id="data-transfer" dense>
        <Heading level={2} title={t('dataTransfer.title')} />

        <p>{t('dataTransfer.text')}</p>
      </PageSection>

      <PageSection id="information" dense>
        <Heading level={2} title={t('information.title')} />

        <p>{t('information.text')}</p>
      </PageSection>

      <PageSection id="ssl" dense>
        <Heading level={2} title={t('ssl.title')} />

        <p>{t('ssl.text')}</p>
      </PageSection>

      <PageSection id="logs" dense>
        <Heading level={2} title={t('logs.title')} />

        <p className="mb-2">{t('logs.text.0')}</p>

        <BulletList bullets={t.raw('logs.bullets')} />

        <p className="mt-2">{t('logs.text.1')}</p>
      </PageSection>

      <PageSection id="contact" dense>
        <Heading level={2} title={t('contact.title')} />

        <p className="mb-2">{t('contact.text.0')}</p>
        <p className="mb-2">{t('contact.text.1')}</p>
        <p>{t('contact.text.2')}</p>
      </PageSection>

      <PageSection id="cookies" dense>
        <Heading level={2} title={t('cookies.title')} />

        <p className="mb-2">{t('cookies.text.0')}</p>
        <p className="mb-2">{t('cookies.text.1')}</p>
        <p className="mb-2">{t('cookies.text.2')}</p>
        <p>{t('cookies.text.3')}</p>
      </PageSection>
    </PageContainer>
  );
};

export default PrivacyPage;
