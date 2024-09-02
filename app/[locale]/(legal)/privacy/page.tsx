import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import Address from '@components/atoms/Address';
import BulletList from '@components/atoms/BulletList';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.privacy');

  return {
    ...generatePageMeta('/privacy', locale),
    title: t('title'),
    description: t('description'),
  };
};

const PrivacyPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.privacy');

  return (
    <PageContainer name="privacy">
      <PageSection id="privacy" first dense>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <h2 className="text-h2">{t('overview')}</h2>

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
        <h2 className="text-h2">{t('responsible.title')}</h2>

        <p className="mb-4">
          <Address />
        </p>

        <p>
          <LinkButton href="/imprint" label={t('responsible.goto.imprint')} />
        </p>
      </PageSection>

      <PageSection id="revokation" dense>
        <h2 className="text-h2">{t('revokation.title')}</h2>

        <p>{t('revokation.text')}</p>
      </PageSection>

      <PageSection id="complaint" dense>
        <h2 className="text-h2">{t('complaint.title')}</h2>

        <p>{t.rich('complaint.text', {
          link: (link) => (
            <Link href={(link as string[])[0]} inline>www.bfdi.bund.de</Link>
          ),
        })}</p>
      </PageSection>

      <PageSection id="data-transfer" dense>
        <h2 className="text-h2">{t('dataTransfer.title')}</h2>

        <p>{t('dataTransfer.text')}</p>
      </PageSection>

      <PageSection id="information" dense>
        <h2 className="text-h2">{t('information.title')}</h2>

        <p>{t('information.text')}</p>
      </PageSection>

      <PageSection id="ssl" dense>
        <h2 className="text-h2">{t('ssl.title')}</h2>

        <p>{t('ssl.text')}</p>
      </PageSection>

      <PageSection id="logs" dense>
        <h2 className="text-h2">{t('logs.title')}</h2>

        <p className="mb-2">{t('logs.text.0')}</p>

        <BulletList bullets={t.raw('logs.bullets')} />

        <p className="mt-2">{t('logs.text.1')}</p>
      </PageSection>

      <PageSection id="contact" dense>
        <h2 className="text-h2">{t('contact.title')}</h2>

        <p className="mb-2">{t('contact.text.0')}</p>
        <p className="mb-2">{t('contact.text.1')}</p>
        <p>{t('contact.text.2')}</p>
      </PageSection>

      <PageSection id="cookies" dense>
        <h2 className="text-h2">{t('cookies.title')}</h2>

        <p className="mb-2">{t('cookies.text.0')}</p>
        <p className="mb-2">{t('cookies.text.1')}</p>
        <p className="mb-2">{t('cookies.text.2')}</p>
        <p>{t('cookies.text.3')}</p>
      </PageSection>
    </PageContainer>
  );
};

export default PrivacyPage;
