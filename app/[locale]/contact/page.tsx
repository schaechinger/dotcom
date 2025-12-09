import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

import { RECAPTCHA_SITE_KEY } from '@app/config';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import ContactForm from '@components/forms/ContactForm';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.contact');

  return {
    ...generatePageMeta('/contact', locale),
    title: t('title'),
    description: t('description'),
  };
};

export const dynamic = 'force-dynamic';

const ContactPage = async ({ params }: PageProps<"/[locale]/contact">) => {
  const { locale } = await params;
  const t = await getTranslations('pages.contact');

  return (
    <PageContainer name="contact">
      <PageSection id="contact" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <p className="mb-2">{t('subtitle')}</p>

        <p>{t('text')}</p>

        <Heading level={2} className="mt-10 mb-4" title={t('availability')} />

        <AvailabilityIndicator />

        <div className="flex flex-wrap mt-10 gap-y-10">
          <div className="flex-1">
            <Heading level={2} title={t('types.mail.title')} />

            <LinkButton href="mailto:manuel@schaechinger.com" label={t('types.mail.goto')} />
          </div>

          <div className="flex-1">
            <Heading level={2} title={t('types.call.title')} />

            <LinkButton href="tel:+4916097506593" label={t('types.call.goto')} />
          </div>

          <div className="flex-none w-full">
            <Heading level={2} title={t('types.write.title')} />

            <ReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} language={locale}>
              <ContactForm translations={t.raw<any>('form')} />
            </ReCaptchaProvider>
          </div>
        </div>
      </PageSection>
    </PageContainer>
  );
};

export default ContactPage;
