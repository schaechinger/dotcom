import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Link from '@components/atoms/Link';
import type { PageProps } from '@app/interfaces';
import { getTimeDuration } from '@app/utils';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import HighlightLabel from '@components/atoms/HighlightLabel';
import JsonLd from '@components/atoms/JsonLd';
import LinkButton from '@components/atoms/LinkButton';
import CareerList from '@components/organisms/CareerList';
import CertificationList from '@components/organisms/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/organisms/ProjectList';
import { generatePageMeta, generateProfileJson } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  return generatePageMeta('/', locale);
};

const HomePage = async ({ params }: PageProps) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.home');
  
  const jsonLd = generateProfileJson();
  const aboutTextOptions = {
    highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
    years: getTimeDuration('2014-02-01'),
  };

  return (
    <>
      <PageContainer name="home" narrow>
        <PageSection id="about" first>
          <h1 className="text-h1">{t('about.title')}</h1>

          <p>{t.rich('about.text.0', aboutTextOptions)}</p>
          <p className="mt-2">{t.rich('about.text.1', aboutTextOptions)}</p>
          <p className="my-4">
            <LinkButton href="/work" label={t('about.goto.work')} />
          </p>

          <p>{t.rich('about.text.2', aboutTextOptions)}</p>
          <p className="mt-4">
            <LinkButton href="/sports" label={t('about.goto.marathons')} />
          </p>
        </PageSection>

        <PageSection id="availability">
          <h2 className="text-h1">{t("availability.title")}</h2>

          <AvailabilityIndicator />

          <p className="mt-4">
            {t.rich('availability.text', {
              contact: (label: React.ReactNode) => <Link href="/contact" inline>{label}</Link>,
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

          <LinkButton href="/contact" label={t('contact.goto')} />
        </PageSection>
      </PageContainer>

      <JsonLd json={jsonLd} />
    </>
  );
};

export default HomePage;
