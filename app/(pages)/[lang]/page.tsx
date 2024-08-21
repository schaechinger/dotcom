import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import AboutSection from '@components/about/AboutSection';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';
import ProjectList from '@components/projects/ProjectList';
import { _l, getPageAlternates } from '@lib/i18n';

export const generateMetadata = ({ params: { lang } }: PageProps): Metadata => ({
  alternates: getPageAlternates('/', lang),
});

const HomePage = ({ params: { lang } }: PageProps) => {
  const t = useTranslations('pages.home');

  return (
  <div className="home-page lg:max-w-screen-sm">
    <AboutSection />

    <section id="availability" className="pt-4 lg:pt-10 mb-8">
      <h2>{t('availability.title')}</h2>

      <AvailabilityIndicator lang={lang} />

      <p className="mt-4">
        {t('availability.text.0')}<Link href={_l('contact', lang)}
          className="inline-link">{t('availability.goto')}</Link>{
          t('availability.text.1')}
      </p>
    </section>

    <section id="experience" className="pt-4 lg:pt-10 mb-8">
      <h2>{t('experience.title')}</h2>

      <CareerList lang={lang} latest />
    </section>

    <section id="certifications" className="pt-4 lg:pt-10 mb-8">
      <h2>{t('certifications.title')}</h2>

      <CertificationList lang={lang} />
    </section>

    <section id="projects" className="pt-4 lg:pt-10 mb-8">
      <h2>{t('projects.title')}</h2>

      <ProjectList lang={lang} highlights />
    </section>

    <section id="contact" className="pt-4 lg:pt-10">
      <h2>{t('contact.title')}</h2>

      <p className="mb-4">
        {t('contact.text')}
      </p>

      <LinkButton href={_l('contact', lang)} label={t('contact.goto')} />
    </section>
  </div>
);
};

export default HomePage;
