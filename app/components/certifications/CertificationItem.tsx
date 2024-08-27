import { useLocale } from 'next-intl';

import { formatDate } from '@app/utils';
import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import LinkButton from '@components/atoms/LinkButton';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type CertificationData } from '@models/certification';
import { type LocaleCode } from '@lib/router';

type Props = {
  heading?: string;
  item: CertificationData;
};

const CertificationItem = ({ heading, item }: Props) => {
  const locale = useLocale() as LocaleCode;

  return (
    <HistoryItemContainer>
      <HistoryItemHeader
        date={formatDate(item.date, locale)}
        heading={heading}
        title={item.title}
      />
      <HistoryItemCompany company={item.company} />
      <HistoryItemDescription description={item.description} bullets={item.bullets} />
      {item.link && <div className="mt-2">
        <LinkButton href={item.link.link} label={item.link.label} />
      </div>}
      <HistoryItemTechList tech={item.tech} />
    </HistoryItemContainer>
  );
};

export default CertificationItem;
