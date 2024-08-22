import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import Address from '@components/imprint/Address';
import { getPageAlternates } from '@lib/i18n';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.imprint');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/imprint', locale),
  };
};

const ImprintPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.imprint');

  return (
    <div className="imprint-page pt-4 lg:pt-10">
      <section id="imprint">
        <h1>{t('title')}</h1>

        <h3>{t('owner.title')}</h3>

        <p className="mb-4">
          <Address />
        </p>
        <p className="mb-4">
          {t('owner.ustidnr', { id: 'DE324539715' })}
        </p>

        <p className="mb-4">
            <LinkButton href="mailto:manuel@schaechinger.com" label={t('contact.goto')} />
        </p>

        <p>
          <strong>{t('odr.title')}:</strong>&nbsp;
          {t.rich('odr.text', {
            link: () => <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="inline-link">ec.europa.eu/consumers/odr</a>,
            br: () => <br />,
          })}
        </p>
      </section>

      <section id="disclaimer" className="pt-10">
        <h3>{t('liability')}</h3>

        <p className="mb-2">
          <strong>{t('disclaimer.title')}:</strong>&nbsp;
          {t('disclaimer.text')}
        </p>

        <p className="mb-2">
          <strong>{t('links.title')}:</strong>&nbsp;
          {t('links.text')}
        </p>

        <p className="mb-2">
          <strong>{t('copyright.title')}:</strong>&nbsp;
          {t('copyright.text')}
        </p>

        <p>
          <strong>{t('violations.title')}:</strong>&nbsp;
          {t('violations.text')}
        </p>
      </section>
    </div>
  );
};

export default ImprintPage;
