import { AvailabilityData } from '@/models/availability';
import { CareerData } from '@/models/career';
import { ProjectData } from '@/models/project';

export interface Database {
  loadAvailability: () => Promise<AvailabilityData>;

  loadCareer: () => Promise<CareerData[]>;

  loadProjects: (highlights?: boolean) => Promise<(ProjectData)[]>;
  loadProjectBySlug: (slug: string) => Promise<ProjectData>;
}
