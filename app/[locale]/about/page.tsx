import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import wallpaper from '@/public/images/opengraph-schaechinger.jpg';
import type { PageProps } from '@app/interfaces';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';
import Link from 'next/link';
import BulletList from '@/app/components/atoms/BulletList';
import Image from 'next/image';
import { getYearSpan } from '@/app/utils';
import { l } from '@/app/lib/router';
import LinkButton from '@/app/components/atoms/LinkButton';

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
        <h1 className="text-h1">{t('pageTitle')}</h1>

        <div className=" my-8">
          <Image
            src={wallpaper}
            alt={t('profile.imageAlt')}
            width={640}
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
            link: (label: React.ReactNode) => <Link href={l('/work#stack', locale)}>{label}</Link>,
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.education', {
            link: (label: React.ReactNode) => <Link href={l('/resume#hm', locale)}>{label}</Link>,
          })}</p>
          <p className="mb-2">{t.rich('profile.bullets.sports', {
            link: (label: React.ReactNode) => <Link href={l('/sports#marathons', locale)}>{label}</Link>,
          })}</p>
          <p className="mb-">{t.rich('profile.bullets.medalmonday', {
            link: (label: React.ReactNode) => <Link href={l('/projects/medalmonday', locale)}>{label}</Link>,
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
