import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import ContactForm from '@components/forms/ContactForm';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import { getPageAlternates } from '@/i18n';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.contact');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/contact', locale),
  };
};

const ContactPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.contact');

  return (
    <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="contact">
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

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
