import type { HeadingTag } from '@components/atoms/Heading';
import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import HistoryItemContent from '@components/molecules/HistoryItemContent';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import type { CertificationData } from '@models/certification';

type Props = {
  heading?: HeadingTag;
  item: CertificationData;
};

const CertificationItem = ({ heading, item }: Props) => (
  <HistoryItemContainer>
    <HistoryItemHeader
      dates={['', item.date]}
      company={item.company}
      heading={heading}
      title={item.title}
      link={item.link?.link}
      type="certificate"
    />
    <HistoryItemContent indented>
      <HistoryItemDescription description={item.description} bullets={item.bullets} />
      <HistoryItemTechList tech={item.tech} />
    </HistoryItemContent>
  </HistoryItemContainer>
);

export default CertificationItem;
