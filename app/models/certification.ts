import { HistoryData, LinkData } from './history';

export interface CertificationData extends HistoryData {
  date: string;
  link?: LinkData;
};

export const sortCertificationList = <T extends CertificationData>(list: T[]) => (
  list.toSorted((a: CertificationData, b: CertificationData) => {
    if (a.date === b.date) {
      return a.title < b.title ? -1 : 1;
    }

    return a.date >= b.date ? -1 : 1;
  })
);
