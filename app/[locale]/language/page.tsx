import type { PageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import translations from '@i18n/language';
import { _l, _t, supportedLangs } from '@lib/i18n';

const LanguagePage = ({ searchParams: { locale } }: PageProps) => {
  const soonTitle: Record<string, string> = {
    eo: 'La Esperanto-versio estas en laboro',
    es: 'La versión en español está en proceso',
    ja: '日本語版も進行中です',
  };

  return (
    <div className="language-page pt-4 lg:pt-10">
      <section id="unsupported">
        <h1>{soonTitle[locale as string || 'en'] || 'Unsupported Language'}</h1>

        <p>
          The language you selected is not available.<br />
          Please select one of the following languages:
        </p>

        {supportedLangs.map((lang) => (
          <p className="mt-2" key={lang} lang={lang}>
            <LinkButton href={_l('/', lang)} label={_t('name', translations, lang)} />
          </p>
        ))}
      </section>
    </div>
  );
};

export default LanguagePage;
