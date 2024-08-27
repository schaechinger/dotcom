import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
import Address from '@components/atoms/Address';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.imprint');

  return {
    ...generatePageMeta('/imprint', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ImprintPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.imprint');

  return (
    <PageContainer name="imprint">
      <PageSection id="imprint" first dense>
        <h1 className="text-h1">{t('title')}</h1>

        <h2 className="text-h2">{t('owner.title')}</h2>

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
      </PageSection>

      <PageSection id="disclaimer" dense>
        <h2 className="text-h2">{t('liability')}</h2>

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
      </PageSection>
    </PageContainer>
  );
};

export default ImprintPage;
