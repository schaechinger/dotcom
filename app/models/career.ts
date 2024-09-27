import { HistoryData } from './history';

export interface CareerData extends HistoryData {
  startDate: string;
  endDate?: string;

  companyJobIndex?: number;
};

export const sortCareerList = <T extends CareerData>(list: T[]) => {
  let currentCompany = {
    slug: '',
    index: 0,
  };

  return list
    .toSorted((a: CareerData, b: CareerData) => {
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
    .map((c) => {
      if (currentCompany.slug !== c.company?.slug) {
        currentCompany = {
          slug: c.company?.slug || '',
          index: 0,
        };
      } else {
        currentCompany.index += 1;
      }

      c.companyJobIndex = currentCompany.index;

      return c;
    });
};
