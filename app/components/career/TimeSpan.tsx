import { formatDate } from '@/services/utils';

const TimeSpan = ({ startDate, endDate }: { startDate: string; endDate?: string }) => (
  <>
    { endDate
      ? `${formatDate(startDate)} bis ${formatDate(endDate)}`
      : `seit ${formatDate(startDate)}` }
  </>
);

export default TimeSpan;
