import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import TimeSpan from '@components/atoms/TimeSpan';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type CareerData } from '@models/career';

type Props = {
  item: CareerData;
  heading?: string;
};

const CareerItem = ({ heading, item }: Props) => (
  <HistoryItemContainer id={item.slug}>
    <HistoryItemHeader
      date={<TimeSpan startDate={item.startDate} endDate={item.endDate} />}
      heading={heading}
      title={item.title}
    />
    <HistoryItemCompany company={item.company} type={item.type} />
    <HistoryItemDescription description={item.description} bullets={item.bullets} />
    <HistoryItemTechList tech={item.tech} />
  </HistoryItemContainer>
);

export default CareerItem;
