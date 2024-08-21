import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/LinkButton';
import { _l, LanguageCode } from '@lib/i18n';

export const generateMetadata = async ({ params: { lang } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('errors.notFound');

  return {
    title: t('title'),
  };
};

const NotFound = ()=> {
  const t = useTranslations('errors.notFound');
  const lang = useLocale() as LanguageCode || 'en';

  return (
    <div className="not-found-page page--error pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="not-found">
        <h1>{t('title')}</h1>

        <p className="mb-4">{t('text')}</p>

        <LinkButton href={_l('/', lang)} label={t('goto')} />

        <KonamiCode />
      </section>
    </div>
  );
};

export default NotFound;
