import {
  ContentfulClientApi,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  createClient,
} from 'contentful';
import { cache } from 'react';

import { type LanguageCode } from '@/i18n';
import { type AvailabilityData } from '@models/availability';
import { type CareerData, sortCareerList } from '@models/career';
import { type CertificationData, sortCertificationList } from '@models/certification';
import { type ProjectData } from '@models/project';


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

type CertificationEntrySkeleton = {
  contentTypeId: 'certification',
  fields: {
    title: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    description: EntryFieldTypes.Text,
    tech: EntryFieldTypes.EntryLink<TechEntrySkeleton>[],
    bullets?: EntryFieldTypes.Object,
    date: EntryFieldTypes.Date,
    highlight?: EntryFieldTypes.Boolean,
    link?: EntryFieldTypes.Object,
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
  (collection?.items || []).map((e) => parseEntry(e)) as T[]
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
      .catch(() => null)
  ))();
};

const getLocale = (locale: LanguageCode) => locale.startsWith('de') ? 'de' : 'en';

export const loadCareer = async (locale?: LanguageCode) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<CareerEntrySkeleton>({
      content_type: 'career',
      // @ts-ignore
      locale: getLocale(locale),
    })
      .then(getEntryFields<CareerData>)
      .then(sortCareerList)
      .catch(() => null)
  ))();
};

export const loadCertifications = async (locale?: LanguageCode) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<CertificationEntrySkeleton>({
      content_type: 'certification',
      // @ts-ignore
      locale: getLocale(locale),
    })
      .then(getEntryFields<CertificationData>)
      .then(sortCertificationList)
      .catch(() => null)
  ))();
};

export const loadProjects = async (locale?: LanguageCode, highlights = false) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<ProjectEntrySkeleton>({
      content_type: 'project',
      'fields.highlight': highlights || undefined,
      // @ts-ignore
      locale: getLocale(locale),
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
      .catch(() => null)
  ))();
};

export const loadProjectBySlug = async (slug: string, locale: LanguageCode) => {
  const client = connect();
  if (!client) {
    return null;
  }

  const contentfulLocale = getLocale(locale);

  return cache(async () => (
    client.getEntries<ProjectEntrySkeleton>({
      content_type: 'project',
      'fields.slug': slug,
      // @ts-ignore
      locale: contentfulLocale,
    })
      .then(getEntryFields<ProjectData>)
      .then((projects) => {
        const [project] = projects;

        if (project?.images) {
          project.images = project.images.filter((image) => (
            !image.lang || image.lang === contentfulLocale
          ));
        }

        return project;
      })
      .catch(() => null)
  ))();
};
