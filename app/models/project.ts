import { type LanguageCode } from '@/i18n';
import { type CareerData } from './career';

export type ProjectType = 'freelance' | 'employee' | 'private' | 'founder';

export type ProjectLink = {
  link: string;
  label: string;
};

export type ProjectLinkData = {
  project?: ProjectLink;
  code?: ProjectLink;
  github?: string[];
  package?: ProjectLink;
  npm?: string;
};

export type ProjectImage = {
  src: string;
  label?: string;
  lang?: LanguageCode;
  de?: {
    label?: string;
  };
  en?: {
    label?: string;
  };
};

export interface ProjectData extends CareerData {
  links?: ProjectLinkData;
  type: ProjectType;
  highlight?: boolean;
  images?: ProjectImage[];
  details?: {
    description?: string[];
    goal?: string[];
    requirements?: string[];
    implementation?: string[];
    features?: string[];
  };
}
