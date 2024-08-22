import { getLocale, getTranslations } from 'next-intl/server';

import LinkButton from '@components/LinkButton';
import CareerItem from '@components/career/CareerItem';
import { loadCareer } from '@lib/contentful';
import { _l, type LanguageCode } from '@lib/i18n';

type Props = {
  latest?: boolean;
};

const CareerList = async ({ latest }: Props) => {
  const t = await getTranslations('careerList');
  const locale = await getLocale() as LanguageCode;
  let career = await loadCareer(locale) || [];

  if (latest) {
    career = career.slice(0, 3);
  }

  const resumeLink = 'de' === locale
    ? 'https://static.schaechinger.com/de/lebenslauf-manuel-schaechinger.pdf'
    : 'https://static.schaechinger.com/en/resume-manuel-schaechinger.pdf';

  return (
    <div className="-mt-4">
      {career.map((c) => (
        <CareerItem key={c.slug} item={c} />
      ))}
      { (!career.length)
        ? <p className="py-4">{t('error')}</p>
        : '' }
      <div>
      <LinkButton
        href={latest ? _l('resume', locale) : resumeLink}
        label={t(`goto.${latest ? 'resume' : 'download'}`)}
      />
      </div>
    </div>
  );
};

export default CareerList;
