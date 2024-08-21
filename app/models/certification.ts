export type Company = {
  name: string;
  location?: string;
  link?: string;
};

export type TechData = {
  slug: string;
  name: string;
  type?: string;
};

export type CertificationData = {
  title: string;
  slug: string;
  description?: string;
  bullets?: string[];
  tech: TechData[];
  date: string;
  link?: {
    href: string;
    label: string;
  };

  createdAt?: Date;
  updatedAt?: Date;
};

export const sortCertificationList = <T extends CertificationData>(list: T[]) => (
  list.sort((a: CertificationData, b: CertificationData) => {
    if (a.date === a.date) {
      return a.title < b.title ? -1 : 1;
    }

    return a.date >= b.date ? -1 : 1;
  })
);
