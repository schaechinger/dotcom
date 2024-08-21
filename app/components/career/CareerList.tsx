import type { LangComponentProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import CareerItem from '@components/career/CareerItem';
import { loadCareer } from '@lib/contentful';
import { _l, _t, loadTranslations } from '@lib/i18n';

interface Props extends LangComponentProps {
  latest?: boolean;
}

const CareerList = async ({ latest, lang }: Props) => {
  const translations = await loadTranslations('components.careerList', lang);

  let career = await loadCareer(lang) || [];

  if (latest) {
    career = career.slice(0, 3);
  }

  const resumeLink = `https://static.schaechinger.com/${lang}/${
    'de' === lang ? 'lebenslauf' : 'resume'}-manuel-schaechinger.pdf`

  return (
    <div className="-mt-4">
      {career.map((c) => (
        <CareerItem key={c.slug} item={c} lang={lang} />
      ))}
      { (!career.length)
        ? <p className="py-4">{_t('error', translations, lang)}</p>
        : '' }
      <div>
        { latest
          ? <LinkButton
            href={_l('resume', lang)}
            label={_t('goto.resume', translations, lang)}
          />
          :  <LinkButton
            href={resumeLink}
            label={_t('goto.download', translations, lang)}
          /> }
      </div>
    </div>
  );
};

export default CareerList;
