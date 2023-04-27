import { defineStore } from 'pinia';
import projects from 'src/data/projects';

export type ProjectRole = 'dev' | 'proto' | 'consulting' | 'design' | 'lead' | 'concept';

export type ProjectType = 'freelance' | 'private' | 'volunteer' | 'employee';

export interface Project {
  title: string;
  key?: string;
  description: string;
  tags: string[];
  year: number | number[];
  type: ProjectType;
  customer: {
    title: string;
    link: string;
  };
  roles: ProjectRole[];
}

interface State {
  projects: Project[];
}

export const useProjectStore = defineStore('project', {
  state: (): State => ({
    projects,
  }),
  getters: {},
  actions: {},
});
