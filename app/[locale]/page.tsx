import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getTimeDuration } from '@app/utils';
import AvailabilityIndicator from '@components/atoms/AvailabilityIndicator';
import Heading from '@components/atoms/Heading';
import HighlightLabel from '@components/atoms/HighlightLabel';
import JsonLd from '@components/atoms/JsonLd';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import CareerList from '@components/organisms/CareerList';
import CertificationList from '@components/organisms/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import ProjectList from '@components/organisms/ProjectList';
import { generatePageMeta, generateProfileJson } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]">): Promise<Metadata> => {
  const { locale } = await params;
  return generatePageMeta('/', locale);
};

const HomePage = async () => {
  const t = await getTranslations('pages.home');

  const jsonLd = generateProfileJson();
  const aboutTextOptions = {
    highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
    years: getTimeDuration('2014-02-01'),
  } as any;

  return (
    <>
      <PageContainer name="home">
        <PageSection id="about" first>
          <Heading level={1} title={t('about.title')} />

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
          <Heading level={1} tag="h2" title={t("availability.title")} />

          <AvailabilityIndicator />

          <p className="mt-4">
            {t.rich('availability.text', {
              contact: (label: React.ReactNode) => <Link href="/contact" inline>{label}</Link>,
            })}
          </p>
        </PageSection>

        <PageSection id="experience">
          <Heading level={1} tag="h2" title={t("experience.title")} />

          <CareerList latest />
        </PageSection>

        <PageSection id="certifications">
          <Heading level={1} tag="h2" title={t("certifications.title")} />

          <CertificationList />
        </PageSection>

        <PageSection id="projects">
          <Heading level={1} tag="h2" title={t("projects.title")} />

          <ProjectList highlights />
        </PageSection>

        <PageSection id="contact">
          <Heading level={1} tag="h2" title={t("contact.title")} />

          <p className="mb-4">{t("contact.text")}</p>

          <LinkButton href="/contact" label={t('contact.goto')} />
        </PageSection>
      </PageContainer>

      <JsonLd json={jsonLd} />
    </>
  );
};

export default HomePage;
