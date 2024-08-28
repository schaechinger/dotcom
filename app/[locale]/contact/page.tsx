import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

import { RECAPTCHA_SITE_KEY } from '@app/config';
import type { PageProps } from '@app/interfaces';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import JsonLd from '@components/atoms/JsonLd';
import LinkButton from '@components/atoms/LinkButton';
import ContactForm from '@components/forms/ContactForm';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generateBreadcrumbJson, generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.contact');

  return {
    ...generatePageMeta('/contact', locale),
    title: t('title'),
    description: t('description'),
  };
};

export const dynamic = 'force-dynamic';

const ContactPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.contact');

  const jsonLd = generateBreadcrumbJson([{ title: t('title') }], locale);

  return (
    <>
      <PageContainer name="contact" narrow>
        <PageSection id="contact" first>
          <h1 className="text-h1">{t('title')}</h1>

          <p className="mb-2">{t('subtitle')}</p>

          <p>{t('text')}</p>

          <h2 className="text-h2 mt-10 mb-4">{t('availability')}</h2>

          <AvailabilityIndicator />

          <div className="flex flex-wrap mt-10 gap-y-10">
            <div className="flex-1">
              <h2 className="text-h2">{t('types.mail.title')}</h2>

              <LinkButton href="mailto:manuel@schaechinger.com" label={t('types.mail.goto')} />
            </div>

            <div className="flex-1">
              <h2 className="text-h2">{t('types.call.title')}</h2>

              <LinkButton href="tel:+4916097506593" label={t('types.call.goto')} />
            </div>

            <div className="flex-none w-full">
              <h2  className="text-h2">{t('types.write.title')}</h2>

              <ReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} language={locale}>
                <ContactForm translations={t.raw('form')} />
              </ReCaptchaProvider>
            </div>
          </div>
        </PageSection>
      </PageContainer>

      <JsonLd json={jsonLd} />
    </>
  );
};

export default ContactPage;
