import { CareerData } from './career';

export type ProjectType = 'freelance' | 'employee' | 'private' | 'founder';

export interface ProjectLink {
  link: string;
  label: string;
}

export interface ProjectLinkData {
  project?: ProjectLink;
  code?: ProjectLink;
  github?: string[];
  package?: ProjectLink;
  npm?: string;
}

export interface ProjectImage {
  src: string;
  label?: string;
}

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
