import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import HistoryItemContent from '@components/molecules/HistoryItemContent';
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
      dates={[item.startDate, item.endDate]}
      company={item.company}
      heading={heading}
      title={item.title}
      type={item.type}
    />
    <HistoryItemContent indented>
      <HistoryItemDescription description={item.description} bullets={item.bullets} />
      <HistoryItemTechList tech={item.tech} />
    </HistoryItemContent>
  </HistoryItemContainer>
);

export default CareerItem;
