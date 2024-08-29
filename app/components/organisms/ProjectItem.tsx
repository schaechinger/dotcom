import { Link } from '@lib/router';
import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import TimeSpan from '@components/atoms/TimeSpan';
import ArrowRight from '@components/icons/ArrowRight';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type ProjectData } from '@models/project';

type Props = {
  item: ProjectData;
  heading?: string;
};

const ProjectItem = ({ item, heading }: Props) => (
  <HistoryItemContainer id={item.slug}>
    <HistoryItemHeader
      date={<TimeSpan startDate={item.startDate} endDate={item.endDate} />}
      heading={heading}
      title={(
        <Link href={`/projects/${item.slug}`} className="group">
          { item.title }
          <ArrowRight className="inline-block -mt-0.5 ml-1 text-primary-300 -rotate-45 transition-colors group-hover:text-primary-500 group-hover:text-xl group-hover:-mt-0.5 group-hover:ml-0.5" />
        </Link>
      )}
    />
    <HistoryItemCompany company={item.company} type={item.type} />
    <HistoryItemDescription description={item.description} bullets={item.bullets} />
    <HistoryItemTechList tech={item.tech} />
  </HistoryItemContainer>
);

export default ProjectItem;
