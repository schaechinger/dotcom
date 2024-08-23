import { getLocale, getTranslations } from 'next-intl/server';

import { STATIC_HOST } from '@app/config';
import LinkButton from '@components/atoms/LinkButton';
import CareerItem from '@components/career/CareerItem';
import { loadCareer } from '@lib/contentful';
import { l, type LanguageCode } from '@/i18n';

type Props = {
  heading?: string;
  latest?: boolean;
};

const CareerList = async ({ heading, latest }: Props) => {
  const t = await getTranslations('careerList');
  const locale = await getLocale() as LanguageCode;
  let career = await loadCareer(locale) || [];

  if (latest) {
    career = career.slice(0, 3);
  }

  const resumeLink = 'de' === locale
    ? `${STATIC_HOST}/de/lebenslauf-manuel-schaechinger.pdf`
    : `${STATIC_HOST}/en/resume-manuel-schaechinger.pdf`;

  return (
    <div className="-mt-4">
      {career.map((c) => (
        <CareerItem key={c.slug} item={c} heading={heading} />
      ))}
      { (!career.length)
        ? <p className="py-4">{t('error')}</p>
        : '' }
      <div>
      <LinkButton
        href={latest ? l('/resume', locale) : resumeLink}
        label={t(`goto.${latest ? 'resume' : 'download'}`)}
      />
      </div>
    </div>
  );
};

export default CareerList;
