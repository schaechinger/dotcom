import { HistoryData } from './history';

export interface CareerData extends HistoryData {
  startDate: string;
  endDate?: string;
};

export const sortCareerList = <T extends CareerData>(list: T[]) => (
  list.toSorted((a: CareerData, b: CareerData) => {
    const aDate = a.endDate || a.startDate;
    const bDate = b.endDate || b.startDate;

    if (!!a.endDate !== !!b.endDate) {
      return a.endDate ? 1 : -1;
    }

    if (aDate === bDate) {
      return a.title < b.title ? -1 : 1;
    }

    return aDate >= bDate ? -1 : 1;
  })
);
