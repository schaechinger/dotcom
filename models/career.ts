export interface CareerData {
  _id?: string;
  title: string;
  slug: string;
  company?: {
    name: string;
    location?: string;
    link?: string;
  };
  description?: string;
  bullets?: string[];
  tech: string[];
  date: string[];
}
