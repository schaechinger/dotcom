import HistoryItemDescription from '@components/atoms/HistoryItemDescription';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import HistoryItemContent from '@components/molecules/HistoryItemContent';
import HistoryItemHeader from '@components/molecules/HistoryItemHeader';
import HistoryItemContainer from '@components/organisms/HistoryItemContainer';
import { type ProjectData } from '@models/project';

type Props = {
  item: ProjectData;
  heading?: string;
};

'ml-1 group-hover:ml-0.5 -mt-0.5'
'inline-block transition-all text-primary-light/60 dark:text-primary-dark/60 group-hover:text-current group-hover:text-lg'

'inline-block transition-all text-primary-light/60 dark:text-primary-dark/60 group-hover:text-current group-hover:text-xl -rotate-45 -mt-0.5 ml-1 group-hover:-mt-0.5 group-hover:ml-0.5'

const ProjectItem = ({ heading, item }: Props) => (
  <HistoryItemContainer id={item.slug}>
    <HistoryItemHeader
      dates={[item.startDate, item.endDate]}
      company={item.company}
      heading={heading}
      title={item.title}
      link={`/projects/${item.slug}`}
      type={item.type}
    />
    <HistoryItemContent indented>
      <HistoryItemDescription description={item.description} bullets={item.bullets} />
      <HistoryItemTechList tech={item.tech} />
    </HistoryItemContent>
  </HistoryItemContainer>
);

export default ProjectItem;
