import { ContentfulClientApi, Entry, EntryCollection, EntryFieldTypes, createClient } from 'contentful';
import { cache } from 'react';

import { AvailabilityData } from '@models/availability';
import { CareerData, sortCareerList } from '@models/career';
import { ProjectData } from '@models/project';

let instance: ContentfulClientApi<any> | null = null;

const connect = () => {
  if (!instance && process.env.CONTENTFUL_API_KEY) {
    instance = createClient({
      space: process.env.CONTENTFUL_SPACE!,
      accessToken: process.env.CONTENTFUL_API_KEY,
    });
  }

  return instance;
}

type AvailabilityEntrySkeleton = {
  contentTypeId: 'availability',
  fields: {
    days: EntryFieldTypes.Integer,
    job: EntryFieldTypes.Boolean,
  },
};

type CompanyEntrySkeleton = {
  contentTypeId: 'company',
  fields: {
    name: EntryFieldTypes.Text,
    link: EntryFieldTypes.Text,
    location: EntryFieldTypes.Text,
  },
};

type RoleEntrySkeleton = {
  contentTypeId: 'role',
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
  },
};

type TechEntrySkeleton = {
  contentTypeId: 'tech',
  fields: {
    name: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    type: EntryFieldTypes.Text,
  },
};

type CareerEntrySkeleton = {
  contentTypeId: 'career',
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    company: EntryFieldTypes.EntryLink<CompanyEntrySkeleton>,
    description: EntryFieldTypes.Text,
    tech: EntryFieldTypes.EntryLink<TechEntrySkeleton>[],
    bullets?: EntryFieldTypes.Object,
    startDate: EntryFieldTypes.Date,
    endDate?: EntryFieldTypes.Date,
    highlight?: EntryFieldTypes.Boolean,
  },
};

type ProjectEntrySkeleton = {
  contentTypeId: 'project',
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    company?: EntryFieldTypes.EntryLink<CompanyEntrySkeleton>,
    description: EntryFieldTypes.Text,
    tech: EntryFieldTypes.EntryLink<TechEntrySkeleton>[],
    bullets?: EntryFieldTypes.Object,
    startDate: EntryFieldTypes.Date,
    endDate?: EntryFieldTypes.Date,
    type: EntryFieldTypes.Text,
    highlight?: EntryFieldTypes.Boolean,
    links?: EntryFieldTypes.Object,
    roles?: EntryFieldTypes.EntryLink<RoleEntrySkeleton>[],
    details?: EntryFieldTypes.Object,
  },
};

const parseEntry = (entry: Entry) => {
  for (let key in entry.fields) {
    const value = entry.fields[key];

    if (Array.isArray(value) && (value[0] as Entry)?.sys) {
      // @ts-ignore
      entry.fields[key] = value.map((e) => parseEntry(e));
    } else if ((value as Entry).sys) {
      // @ts-ignore
      entry.fields[key] = parseEntry(value as Entry);
    }
  }

  return entry.fields;
}

const getEntryFields = <T>(collection: EntryCollection<any>) => (
  (collection.items || []).map((e) => parseEntry(e)) as T[]
);

export const loadAvailability = async () => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<AvailabilityEntrySkeleton>({
      content_type: 'availability',
    })
      .then(getEntryFields<AvailabilityData>)
      .then((availabilities) => availabilities[0])
  ))();
};

export const loadCareer = async () => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<CareerEntrySkeleton>({
      content_type: 'career',
    })
      .then(getEntryFields<CareerData>)
      .then(sortCareerList)
  ))();
};

export const loadProjects = async (highlights = false) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<ProjectEntrySkeleton>({
      content_type: 'project',
      'fields.highlight': highlights || undefined,
    })
      .then(getEntryFields<ProjectData>)
      .then(sortCareerList)
      .then((projects) => (
        projects.map((p) => ({
          title: p.title,
          slug: p.slug,
          company: p.company,
          description: p.description,
          bullets: p.bullets,
          tech: p.tech,
          startDate: p.startDate,
          endDate: p.endDate,
          links: p.links,
          type: p.type,
          highlight: p.highlight,
        }))
      ))
  ))();
};

export const loadProjectBySlug = async (slug: string) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    client.getEntries<ProjectEntrySkeleton>({
      content_type: 'project',
      'fields.slug': slug,
    })
      .then(getEntryFields<ProjectData>)
      .then((projects) => projects[0])
  ))();
};
