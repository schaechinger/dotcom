import { useLocale, useTranslations } from 'next-intl';

import LinkButton from '@components/atoms/LinkButton';
import HighlightLabel from '@components/atoms/HighlightLabel';
import { l, type LanguageCode } from '@/i18n';

const AboutSection = () => {
  const t = useTranslations('pages.home.about');
  const lang = useLocale() as LanguageCode;
  
  return (
    <section id="about" className="pt-4 lg:pt-10 mb-8">
      <h1 className="text-h1">{t('title')}</h1>

      <p className="mb-2">
        {t.rich('text.0', {
          highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
        })}
      </p>

      <p className="mb-2">
        {t.rich('text.1', {
          highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
        })}
      </p>

      <p className="mb-4">
        {t.rich('text.2', {
          highlight: (label: React.ReactNode) => <HighlightLabel>{label}</HighlightLabel>,
        })}
      </p>

      <p>
        <LinkButton href={l('work', lang)} label={t('goto')} />
      </p>
    </section>
  );
};

export default AboutSection;
