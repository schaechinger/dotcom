import { useLocale } from 'next-intl';

import { formatDate } from '@app/utils';
import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type LocaleCode } from '@lib/router';
import { type CertificationData } from '@models/certification';

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
        link={item.link?.link}
      />
      <HistoryItemCompany company={item.company} />
      <HistoryItemDescription description={item.description} bullets={item.bullets} />
      <HistoryItemTechList tech={item.tech} />
    </HistoryItemContainer>
  );
};

export default CertificationItem;
