import { formatDate } from '@app/utils';

type Props = {
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
