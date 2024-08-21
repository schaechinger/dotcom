import type { Metadata } from 'next';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import ContactForm from '@components/forms/ContactForm';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Hier kannst du auf schnellem Weg mit mir in Kontakt treten.',
  alternates: {
    canonical: '/contact',
    languages: {
      'de': '/contact',
    },
  },
};

const ResumePage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.contact');

  return (
    <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="contact">
        <h1>{t('title')}</h1>

        <p className="mb-2">{t('subtitle')}</p>

        <p>{t('text')}</p>

        <h3 className="mt-10 mb-4">{t('availability')}</h3>

        <AvailabilityIndicator />

        <div className="flex flex-wrap mt-10 gap-y-10">
          <div className="flex-1">
            <h3>{t('types.mail.title')}</h3>
            <LinkButton href="mailto:manuel@schaechinger.com" label={t('types.mail.goto')} />
          </div>

          <div className="flex-1">
            <h3>{t('types.call.title')}</h3>
            <LinkButton href="tel:+4916097506593" label={t('types.call.goto')} />
          </div>

          <div className="flex-none w-full">
            <h3>{t('types.write.title')}</h3>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
