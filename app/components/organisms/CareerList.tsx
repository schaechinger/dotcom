import { getLocale, getTranslations } from 'next-intl/server';

import { STATIC_HOST } from '@app/config';
import type { HeadingTag } from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import CareerItem from '@components/organisms/CareerItem';
import HistoryItemList from '@components/organisms/HistoryItemList';
import { loadCareer } from '@lib/contentful';
import type { LocaleCode } from '@lib/router';
import { HistoryType } from '@/app/models/history';

type Props = {
  heading?: HeadingTag;
  latest?: boolean;
  noLink?: boolean;
  type?: HistoryType;
};

const CareerList = async ({ heading, latest, noLink, type }: Props) => {
  const t = await getTranslations('careerList');
  const locale = await getLocale() as LocaleCode;
  const career = (await loadCareer(locale, type) || []).slice(0, latest ? 3 : undefined);

  const resumeLink = 'de' === locale
    ? `${STATIC_HOST}/de/lebenslauf-manuel-schaechinger.pdf`
    : `${STATIC_HOST}/en/resume-manuel-schaechinger.pdf`;

  return (
    <HistoryItemList
      items={career.map((c) => (
        <CareerItem key={c.slug} item={c} heading={heading} />
      ))}
      link={!noLink &&(
        <LinkButton
          href={latest ? '/resume' : resumeLink}
          label={t(`goto.${latest ? 'resume' : 'download'}`)}
        />
      )}
      error={t('error')}
    />
  );
};

export default CareerList;
