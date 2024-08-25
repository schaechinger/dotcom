import { type LanguageCode } from '@/i18n';
import type { HistoryData, LinkData } from './history';

export type ProjectType = 'freelance' | 'employee' | 'private' | 'founder';

export type ProjectLinkData = {
  project?: LinkData;
  code?: LinkData;
  github?: string[];
  package?: LinkData;
  npm?: string;
};

export type ProjectDetailData = {
  description?: string[];
  goal?: string[];
  requirements?: string[];
  implementation?: string[];
  features?: string[];
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
  eo?: {
    label?: string;
  };
};

export interface ProjectData extends HistoryData {
  links?: ProjectLinkData;
  type: ProjectType;
  highlight?: boolean;
  images?: ProjectImage[];
  details?: ProjectDetailData;

  startDate: string;
  endDate?: string;
}
