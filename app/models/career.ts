export interface Company {
  name: string;
  location?: string;
  link?: string;
};

export interface TechData {
  slug: string;
  name: string;
  type?: string;
}

export interface CareerData {
  title: string;
  slug: string;
  company?: Company;
  description?: string;
  bullets?: string[];
  tech: TechData[];
  startDate: string;
  endDate?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export const sortCareerList = <T extends CareerData>(list: T[]) => (
  list.sort((a: CareerData, b: CareerData) => {
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
