import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import AboutSection from '@components/about/AboutSection';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import ProjectList from '@components/projects/ProjectList';
import { l, getPageAlternates } from '@/i18n';

export const generateMetadata = ({ params: { locale } }: PageProps): Metadata => ({
  alternates: getPageAlternates('/', locale),
});

const HomePage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.home');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      'name': 'Manuel Schächinger',
      alternateName: 'schaechinger',
    },
  };

  return (
    <>
      <div className="home-page lg:max-w-screen-sm">
        <AboutSection />

        <section id="availability" className="pt-4 lg:pt-10 mb-8">
          <h2 className="text-h1">{t("availability.title")}</h2>

          <AvailabilityIndicator />

          <p className="mt-4">
            {t.rich('availability.text', {
              contact: (label: React.ReactNode) => <Link href={l('contact', locale)}
              className="inline-link">{label}</Link>,
            })}
          </p>
        </section>

        <section id="experience" className="pt-4 lg:pt-10 mb-8">
          <h2 className="text-h1">{t("experience.title")}</h2>

          <CareerList latest />
        </section>

        <section id="certifications" className="pt-4 lg:pt-10 mb-8">
          <h2 className="text-h1">{t("certifications.title")}</h2>

          <CertificationList />
        </section>

        <section id="projects" className="pt-4 lg:pt-10 mb-8">
          <h2 className="text-h1">{t("projects.title")}</h2>

          <ProjectList highlights />
        </section>

        <section id="contact" className="pt-4 lg:pt-10">
          <h2 className="text-h1">{t("contact.title")}</h2>

          <p className="mb-4">
            {t("contact.text")}
          </p>

          <LinkButton href={l('contact', locale)} label={t('contact.goto')} />
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default HomePage;
