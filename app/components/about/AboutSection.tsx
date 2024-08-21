import { useLocale, useTranslations } from 'next-intl';

import LinkButton from '@components/LinkButton';
import HighlightLabel from '@components/HighlightLabel';
import { _l, LanguageCode } from '@lib/i18n';

const AboutSection = () => {
  const t = useTranslations('pages.home.about');
  const lang = useLocale() as LanguageCode;
  
  return (
    <section id="about" className="pt-4 lg:pt-10 mb-8">
      <h1>{t('title')}</h1>

      <p className="mb-2">
        {t('text.0.0')}<HighlightLabel
          label="JavaScript" />{t('text.0.1')}
      </p>

      <p className="mb-2">
      {t('text.1.0')}<HighlightLabel label="Node.js"
        />{t('text.1.1')}<HighlightLabel label="Vue.js"
        />{t('text.1.2')}<HighlightLabel label="React"
        />{t('text.1.3')}
      </p>

      <p className="mb-4">
        {t('text.2')}
      </p>

      <p>
        <LinkButton href={_l('work', lang)} label={t('goto')} />
      </p>
    </section>
  );
};

export default AboutSection;
