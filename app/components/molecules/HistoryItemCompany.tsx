import CompanyLink from '@components/atoms/CompanyLink';
import HistoryItemTypeLabel from '@/app/components/atoms/HistoryItemTypeLabel';
import type { Company, HistoryType } from '@models/history';

type Props = {
  company?: Company;
  type?: HistoryType;
};

const HistoryItemCompany = ({ company, type }: Props) => (
  (company || type) && <div className="font-thin">
    {type && <HistoryItemTypeLabel type={type} label={!company} colored />}
    {company && <CompanyLink company={company} />}
  </div>
);

export default HistoryItemCompany;
