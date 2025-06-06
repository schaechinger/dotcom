import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import wallpaper from '@/public/images/opengraph-schaechinger.jpg';
import type { PageProps } from '@app/interfaces';
import { getTimeDuration } from '@/app/utils';
import BulletList from '@components/atoms/BulletList';
import Breadcrumbs from '@components/atoms/Breadcumbs';
import Link from '@components/atoms/Link';
import LinkButton from '@components/atoms/LinkButton';
import YearInFigures from '@/app/components/atoms/YearInFigures';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.about');

  return {
    ...generatePageMeta('/about', locale),
    title: t('title'),
    description: t('description'),
  };
};

const AboutPage = async () => {
  const t = await getTranslations('pages.about');
  const age = getTimeDuration('1991-02-14');
  const years = getTimeDuration('2014-02-01');

  return (
    <PageContainer name="about">
      <PageSection id="profile" first dense>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('pageTitle')}</h1>

        <div className="mb-8 -mx-4 sm:-mx-2">
          <Image
            src={wallpaper}
            alt={t('profile.imageAlt')}
            sizes="(max-width: 640px) 100vw, 640px"
            className="border-y-2 sm:border-x-2 sm:rounded-md border-neutral-300/30 dark:border-dark-600/50"
            priority
          />
          <p className="text-sm mt-2 px-4 sm:px-2">{t('profile.imageAlt')}</p>
        </div>

        <h2 className="text-h2">{t('profile.title')}</h2>

        <BulletList>
          <p className="mb-2">{t('profile.bullets.age', { age })}</p>
          <p className="mb-2">{t('profile.bullets.location')}</p>
          <p className="mb-2">{t('profile.bullets.coffee')}</p>
          <p className="mb-2">{t('profile.bullets.work', { years })}</p>
          <p className="mb-2">{t.rich('profile.bullets.stack', {
            link: (label: React.ReactNode) => (
              <Link href="/work#stack" className="inline-link">{label}</Link>
            ),
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.education', {
            link: (label: React.ReactNode) => (
              <Link href="/resume#hm" className="inline-link">{label}</Link>
            ),
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.sports', {
            link: (label: React.ReactNode) => (
              <Link href="/sports#marathons" className="inline-link">{label}</Link>
            ),
          })}</p>
          <p>{t.rich('profile.bullets.medalmonday', {
            link: (label: React.ReactNode) => (
              <Link href="/projects/medalmonday" className="inline-link">{label}</Link>
            ),
          })}</p>
        </BulletList>
      </PageSection>

      <PageSection id="figures" dense>
        <YearInFigures />
      </PageSection>

      <PageSection id="links" dense>
        <p>{t('profile.text')}</p>

        <p className="mt-4">
          <LinkButton href="/resume" label={t('profile.goto.resume')} />
        </p>
        <p className="mt-2">
          <LinkButton href="/projects" label={t('profile.goto.projects')} />
        </p>
      </PageSection>
    </PageContainer>
  );
};

export default AboutPage;
