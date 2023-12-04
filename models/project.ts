import { CareerData } from './career';

export type ProjectType = 'freelance' | 'employee' | 'private' | 'founder';

export interface ProjectData extends CareerData {
  links?: {
    project?: string;
    code?: string;
  };
  type: ProjectType;
}
