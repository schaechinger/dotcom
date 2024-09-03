import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import TimeSpan from '@components/atoms/TimeSpan';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemCompany from '@components/molecules/HistoryItemCompany';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type ProjectData } from '@models/project';

type Props = {
  item: ProjectData;
  heading?: string;
};

'ml-1 group-hover:ml-0.5 -mt-0.5'
'inline-block transition-all text-secondary/60 dark:text-primary/60 group-hover:text-current group-hover:text-lg'

'inline-block transition-all text-secondary/60 dark:text-primary/60 group-hover:text-current group-hover:text-xl -rotate-45 -mt-0.5 ml-1 group-hover:-mt-0.5 group-hover:ml-0.5'

const ProjectItem = ({ heading, item }: Props) => (
  <HistoryItemContainer id={item.slug}>
    <HistoryItemHeader
      date={<TimeSpan startDate={item.startDate} endDate={item.endDate} />}
      heading={heading}
      title={item.title}
      link={`/projects/${item.slug}`}
    />
    <HistoryItemCompany company={item.company} type={item.type} />
    <HistoryItemDescription description={item.description} bullets={item.bullets} />
    <HistoryItemTechList tech={item.tech} />
  </HistoryItemContainer>
);

export default ProjectItem;
