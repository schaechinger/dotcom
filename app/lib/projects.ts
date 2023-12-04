import { cache } from 'react';

import { ProjectData } from '@/models/project';

import { getDb } from './database';
import { sortCareerList } from './career';

export const loadProjects = cache(async (highlights = false) => {
  const db = await getDb();
  const projects = db?.collection('projects');

  const where: { [key: string]: string | boolean } = {};
  if (highlights) {
    where.highlight = highlights;
  }

  const results = (await projects?.find(where).toArray()) as unknown as ProjectData[] || [];

  return results
    .map((p) => ({
      ...p,
      _id: undefined,
    }))
    .sort(sortCareerList);
});

export const loadProjectBySlug = cache(async (slug: string) => {
  const db = await getDb();
  const projects = db?.collection('projects');

  const project: ProjectData = (await projects?.findOne({ slug })) as unknown as ProjectData || null;
  if (project) {
    project._id = undefined;
  }

  return project;
});
