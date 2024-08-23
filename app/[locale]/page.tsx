import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { l, getPageAlternates } from '@/i18n';
import type { PageProps } from '@app/interfaces';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import LinkButton from '@components/atoms/LinkButton';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import AboutSection from '@components/molecules/AboutSection';
import PageContainer from '@components/organisms/PageContainer';
import ProjectList from '@components/projects/ProjectList';

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
      <PageContainer name="home" narrow>
        <AboutSection />

        <section id="availability" className="pt-4 lg:pt-10 mb-8">
          <h2 className="text-h1">{t("availability.title")}</h2>

          <AvailabilityIndicator />

          <p className="mt-4">
            {t.rich('availability.text', {
              contact: (label: React.ReactNode) => <Link href={l('/contact', locale)}
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

          <LinkButton href={l('/contact', locale)} label={t('contact.goto')} />
        </section>
      </PageContainer>
      <Script type="application/ld+json" id="jsonld">{JSON.stringify(jsonLd)}</Script>
    </>
  );
};

export default HomePage;
