import CompanyLink from '@components/atoms/CompanyLink';
import ProjectTypeLabel from '@components/atoms/ProjectTypeLabel';
import type { Company } from '@models/history';
import { ProjectType } from '@models/project';

type Props = {
  company?: Company;
  type?: ProjectType;
};

const HistoryItemCompany = ({ company, type }: Props) => (
  (company || type) && <div className="font-thin">
    {type && <ProjectTypeLabel type={type} label={!company} colored />}
    {company && <CompanyLink company={company} />}
  </div>
);

export default HistoryItemCompany;
