import type { Metadata } from 'next';
import Link from 'next/link';

import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import AboutSection from '@components/about/AboutSection';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';
import ProjectList from '@components/projects/ProjectList';
import { _l, _t, getPageAlternates, loadTranslations } from '@lib/i18n';

export const generateMetadata = ({ params: { lang } }: PageProps): Metadata => ({
  alternates: getPageAlternates('/', lang),
});

const HomePage = async ({ params: { lang } }: PageProps) => {
  const translations = await loadTranslations('pages.home', lang);

  return (
  <div className="home-page lg:max-w-screen-sm">
    <AboutSection lang={lang} />

    <section id="availability" className="pt-4 lg:pt-10 mb-8">
      <h2>{_t('availability.title', translations, lang)}</h2>

      <AvailabilityIndicator lang={lang} />

      <p className="mt-4">
        {_t('availability.text.0', translations, lang)}<Link href={_l('contact', lang)}
          className="inline-link">{_t('availability.goto', translations, lang)}</Link>{
          _t('availability.text.1', translations, lang)}
      </p>
    </section>

    <section id="experience" className="pt-4 lg:pt-10 mb-8">
      <h2>{_t('experience.title', translations, lang)}</h2>

      <CareerList lang={lang} latest />
    </section>

    <section id="certifications" className="pt-4 lg:pt-10 mb-8">
      <h2>{_t('certifications.title', translations, lang)}</h2>

      <CertificationList lang={lang} />
    </section>

    <section id="projects" className="pt-4 lg:pt-10 mb-8">
      <h2>{_t('projects.title', translations, lang)}</h2>

      <ProjectList lang={lang} highlights />
    </section>

    <section id="contact" className="pt-4 lg:pt-10">
      <h2>{_t('contact.title', translations, lang)}</h2>

      <p className="mb-4">
        {_t('contact.text', translations, lang)}
      </p>

      <LinkButton href={_l('contact', lang)} label={_t('contact.goto', translations, lang)} />
    </section>
  </div>
);
};

export default HomePage;
