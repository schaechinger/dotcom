import { getCacheData, setCacheData } from '@lib/cache';
import { loadProjects as loadContentfulProjects } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type ProjectData } from '@models/project';

const cacheKey = "projects";

export const loadProjects = async (locale: LocaleCode, highlights = false) => {
  let projects = getCacheData<ProjectData>(cacheKey, locale);

  if (!projects.length) {
    await initProjects(locale);

    projects = getCacheData<ProjectData>(cacheKey, locale);
  }

  return projects.filter((p) => !highlights || p.highlight);
};

export const loadProjectBySlug = async (slug: string, locale: LocaleCode) => {
  return loadProjects(locale).then((projects) => (
    projects.find((p) => p.slug === slug) || null
  ));
};

export const initProjects = async (locale: LocaleCode) => {
  let projects = getCacheData(cacheKey, locale).length;
  if (!projects) {
    const data = await loadContentfulProjects(locale);

    setCacheData(cacheKey, locale, data || []);

    projects = getCacheData(cacheKey, locale).length;
  }

  return projects;
};