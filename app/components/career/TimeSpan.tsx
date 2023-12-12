import { formatDate } from '@app/utils';

interface Props {
  startDate: string;
  endDate?: string;
}

const TimeSpan = ({ startDate, endDate }: Props) => (
  <>
    { endDate
      ? `${formatDate(startDate)} bis ${formatDate(endDate)}`
      : `seit ${formatDate(startDate)}` }
  </>
);

export default TimeSpan;
