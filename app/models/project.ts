import { type LocaleCode } from '@lib/router';

import type { HistoryData, LinkData } from './history';

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
  lang?: LocaleCode;
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
  highlight?: boolean;
  images?: ProjectImage[];
  details?: ProjectDetailData;

  startDate: string;
  endDate?: string;
}
