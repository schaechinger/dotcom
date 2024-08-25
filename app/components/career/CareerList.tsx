import { getLocale, getTranslations } from 'next-intl/server';

import { l, type LanguageCode } from '@/i18n';
import { STATIC_HOST } from '@app/config';
import LinkButton from '@components/atoms/LinkButton';
import CareerItem from '@components/career/CareerItem';
import HistoryItemList from '@components/organisms/HistoryItemList';
import { loadCareer } from '@lib/contentful';

type Props = {
  heading?: string;
  latest?: boolean;
};

const CareerList = async ({ heading, latest }: Props) => {
  const t = await getTranslations('careerList');
  const locale = await getLocale() as LanguageCode;
  const career = (await loadCareer(locale) || []).slice(0, latest ? 3 : undefined);

  const resumeLink = 'de' === locale
    ? `${STATIC_HOST}/de/lebenslauf-manuel-schaechinger.pdf`
    : `${STATIC_HOST}/en/resume-manuel-schaechinger.pdf`;

  return (
    <HistoryItemList
      items={career.map((c) => (
        <CareerItem key={c.slug} item={c} heading={heading} />
      ))}
      link={<LinkButton
        href={latest ? l('/resume', locale) : resumeLink}
        label={t(`goto.${latest ? 'resume' : 'download'}`)}
      />}
      error={t('error')}
    />
  );
};

export default CareerList;
