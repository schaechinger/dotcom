import type { ComponentProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import HighlightLabel from '@components/HighlightLabel';
import { _l, _t, loadTranslations } from '@lib/i18n';

const AboutSection = async ({ lang }: ComponentProps) => {
  const translations = await loadTranslations('pages.home.about', lang);
  
  return (
    <section id="about" className="pt-4 lg:pt-10 mb-8">
      <h1>{_t('title', translations, lang)}</h1>

      <p className="mb-2">
        {_t('text.0.0', translations, lang)}<HighlightLabel
          label="JavaScript" />{_t('text.0.1', translations, lang)}
      </p>

      <p className="mb-2">
      {_t('text.1.0', translations, lang)}<HighlightLabel label="Node.js"
        />{_t('text.1.1', translations, lang)}<HighlightLabel label="Vue.js"
        />{_t('text.1.2', translations, lang)}<HighlightLabel label="React"
        />{_t('text.1.3', translations, lang)}
      </p>

      <p className="mb-4">
        {_t('text.2', translations, lang)}
      </p>

      <p>
        <LinkButton href={_l('work', lang)} label={_t('goto', translations, lang)} />
      </p>
    </section>
  );
};

export default AboutSection;
