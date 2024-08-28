import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import wallpaper from '@/public/images/opengraph-schaechinger.jpg';
import type { PageProps } from '@app/interfaces';
import { getYearSpan } from '@/app/utils';
import BulletList from '@components/atoms/BulletList';
import LinkButton from '@components/atoms/LinkButton';
import Breadcrumbs from '@components/molecules/Breadcumbs';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { l } from '@lib/router';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.about');

  return {
    ...generatePageMeta('/about', locale),
    title: t('title'),
    description: t('description'),
  };
};

const AboutPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.about');
  const age = getYearSpan('1991-02-14');
  const years = getYearSpan('2014-02-01');

  return (
    <PageContainer name="about" narrow>
      <PageSection id="profile" first dense>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('pageTitle')}</h1>

        <div className="mb-8">
          <Image
            src={wallpaper}
            alt={t('profile.imageAlt')}
            sizes="(max-width: 640px) 100vw, 640px"
            className="rounded-sm border-2 border-slate-300"
            priority
          />
          <p className="text-sm mt-2">{t('profile.imageAlt')}</p>
        </div>

        <h2 className="text-h2">{t('profile.title')}</h2>

        <BulletList>
          <p className="mb-2">{t('profile.bullets.age', { age })}</p>
          <p className="mb-2">{t('profile.bullets.location', { age })}</p>
          <p className="mb-2">{t('profile.bullets.coffee')}</p>
          <p className="mb-2">{t('profile.bullets.work', { years })}</p>
          <p className="mb-2">{t.rich('profile.bullets.stack', {
            link: (label: React.ReactNode) => (
              <Link href={l('/work#stack', locale)}
                className="inline-link">{label}</Link>
            ),
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.education', {
            link: (label: React.ReactNode) => (
              <Link href={l('/resume#hm', locale)}
                className="inline-link">{label}</Link>
            ),
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.sports', {
            link: (label: React.ReactNode) => (
              <Link href={l('/sports#marathons', locale)}
                className="inline-link">{label}</Link>
            ),
          })}</p>
          <p className="mb-">{t.rich('profile.bullets.medalmonday', {
            link: (label: React.ReactNode) => (
              <Link href={l('/projects/medalmonday', locale)}
                className="inline-link">{label}</Link>
            ),
          })}</p>
        </BulletList>
      </PageSection>

      <PageSection id="links" dense>
        <p>{t('profile.text')}</p>

        <p className="mt-4">
          <LinkButton href={l('/resume', locale)} label={t('profile.goto.resume')} />
        </p>
        <p className="mt-2">
          <LinkButton href={l('/projects', locale)} label={t('profile.goto.projects')} />
        </p>
      </PageSection>
    </PageContainer>
  );
};

export default AboutPage;
