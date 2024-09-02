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

export type LinkData = {
  link: string;
  label: string;
};

export type HistoryData = {
  title: string;
  slug: string;
  company?: Company;
  description?: string;
  bullets?: string[];
  tech: TechData[];

  updatedAt?: string;
};
