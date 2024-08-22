import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/atoms/LinkButton';
import { l, type LanguageCode } from '@/i18n';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('errors.notFound');

  return {
    title: t('title'),
  };
};

const LocalizedNotFoundPage = () => {
  const t = useTranslations('errors.notFound');
  const lang = useLocale() as LanguageCode || 'en';

  return (
    <div className="not-found-page page--error pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="not-found">
        <h1 className="text-h1">{t('title')}</h1>

        <p className="mb-4">{t('text')}</p>

        <LinkButton href={l('/', lang)} label={t('goto')} />

        <KonamiCode />
      </section>
    </div>
  );
};

export default LocalizedNotFoundPage;
