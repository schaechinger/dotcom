import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import { getYearSpan } from '@app/utils';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import HighlightLabel from '@components/atoms/HighlightLabel';
import LinkButton from '@components/atoms/LinkButton';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/projects/ProjectList';
import { l } from '@lib/router';
import { generatePageMeta, generateProfileJson } from '@lib/seo';

export const generateMetadata = ({ params: { locale } }: PageProps): Metadata => generatePageMeta('/', locale);

const HomePage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.home');

  const aboutTextOptions = {
    highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
    years: getYearSpan('2014-02-01'),
  };

  const jsonLd = generateProfileJson();

  return (
    <>
      <PageContainer name="home" narrow>
        <PageSection id="about" first>
          <h1 className="text-h1">{t('about.title')}</h1>

          <p>{t.rich('about.text.0', aboutTextOptions)}</p>
          <p className="mt-2">{t.rich('about.text.1', aboutTextOptions)}</p>
          <p className="my-4">
            <LinkButton href={l('/work', locale)} label={t('about.goto.work')} />
          </p>

          <p>{t.rich('about.text.2', aboutTextOptions)}</p>
          <p className="mt-4">
            <LinkButton href={l('/sports', locale)} label={t('about.goto.marathons')} />
          </p>
        </PageSection>

        <PageSection id="availability">
          <h2 className="text-h1">{t("availability.title")}</h2>

          <AvailabilityIndicator />

          <p className="mt-4">
            {t.rich('availability.text', {
              contact: (label: React.ReactNode) => <Link href={l('/contact', locale)}
              className="inline-link">{label}</Link>,
            })}
          </p>
        </PageSection>

        <PageSection id="experience">
          <h2 className="text-h1">{t("experience.title")}</h2>

          <CareerList latest />
        </PageSection>

        <PageSection id="certifications">
          <h2 className="text-h1">{t("certifications.title")}</h2>

          <CertificationList />
        </PageSection>

        <PageSection id="projects">
          <h2 className="text-h1">{t("projects.title")}</h2>

          <ProjectList highlights />
        </PageSection>

        <PageSection id="contact">
          <h2 className="text-h1">{t("contact.title")}</h2>

          <p className="mb-4">{t("contact.text")}</p>

          <LinkButton href={l('/contact', locale)} label={t('contact.goto')} />
        </PageSection>
      </PageContainer>

      <Script type="application/ld+json" id="jsonld">{JSON.stringify(jsonLd)}</Script>
    </>
  );
};

export default HomePage;
