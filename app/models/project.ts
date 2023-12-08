import { CareerData } from './career';

export type ProjectType = 'freelance' | 'employee' | 'private' | 'founder';

export interface ProjectLink {
  link: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  label?: string;
}

export interface ProjectData extends CareerData {
  links?: {
    project?: ProjectLink;
    code?: ProjectLink;
    package?: ProjectLink;
  };
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
