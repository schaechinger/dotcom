export type Company = {
  name: string;
  slug: string;
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

export type HistoryType = 'freelance' | 'employee' | 'private' | 'founder' | 'education' | 'certificate';

export type HistoryData = {
  title: string;
  slug: string;
  company?: Company;
  description?: string;
  bullets?: string[];
  tech: TechData[];
  type: HistoryType;

  updatedAt?: string;
};
