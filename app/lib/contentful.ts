import 'server-only';
import {
  ContentfulClientApi,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  createClient,
} from 'contentful';
import { cache } from 'react';

import { type LocaleCode } from '@lib/router';
import { type AvailabilityData } from '@models/availability';
import { type CareerData, sortCareerList } from '@models/career';
import { type CertificationData, sortCertificationList } from '@models/certification';
import { FiguresData } from '@models/figures';
import { HistoryType } from '@models/history';
import { type NowData } from '@models/now';
import { type ParticipationData, sortParticipationList } from '@models/participation';
import { type ProjectData } from '@models/project';

type AvailabilityEntrySkeleton = {
  contentTypeId: 'availability',
  fields: {
    days: EntryFieldTypes.Integer,
    job: EntryFieldTypes.Boolean,
  },
};

type FiguresEntrySkeleton = {
  contentTypeId: 'figures',
  fields: {
    year: EntryFieldTypes.Text,
    marathons: EntryFieldTypes.Number,
    outages: EntryFieldTypes.Number,
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

type NowEntrySkeleton = {
  contentTypeId: 'now',
  fields: {
    tasks: EntryFieldTypes.Object,
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

type ParticipationEntrySkeleton = {
  contentTypeId: 'participation',
  fields: {
    event: EntryFieldTypes.Text,
    contest: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    date: EntryFieldTypes.Date,
    sport: EntryFieldTypes.Text,
    sections: EntryFieldTypes.Object,
    time: EntryFieldTypes.Text,
    rank: EntryFieldTypes.Number,
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
  entry.fields.updatedAt = entry.sys.updatedAt;

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

export const loadFigures = async () => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<FiguresEntrySkeleton>({
      content_type: 'figures',
      'fields.year': `${new Date().getFullYear()}`,
    })
      .then(getEntryFields<FiguresData>)
      .then((figures) => (figures || [{}])[0])
      .catch(() => null)
  ))();
};

const getLocale = (locale?: LocaleCode) => (locale || 'en').startsWith('de') ? 'de' : 'en';

export const loadCareer = async (locale?: LocaleCode, type?: HistoryType) => {
  const client = connect();
  if (!client) {
    return null;
  }

  const list = await cache(async () => (
    await client.getEntries<CareerEntrySkeleton>({
      content_type: 'career',
      // @ts-ignore
      locale: getLocale(locale),
    })
      .then(getEntryFields<CareerData>)
      .then(sortCareerList)
      .catch(() => null)
  ))();

  return (list || []).filter((item) => type ? type === item.type : 'education' !== item.type);
};

export const loadCertifications = async (locale?: LocaleCode) => {
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

export const loadNow = async (locale?: LocaleCode) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<NowEntrySkeleton>({
      content_type: 'now',
      // @ts-ignore
      locale: getLocale(locale),
    })
      .then(getEntryFields<NowData>)
      .then((now) => ({
        ...now[0],
        activities: now[0].tasks.map((activity) => {
          if (!Array.isArray(activity.tasks)) {
            activity.tasks = [activity.description || activity.tasks];
          }

          return activity;
        }),
      }))
      .catch(() => ({
        updatedAt: '',
        activities: [],
      }))
  ))();
};

export const loadProjects = async (locale?: LocaleCode, highlights = false) => {
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
          updatedAt: p.updatedAt,
        }))
      ))
      .catch(() => null)
  ))();
};

export const loadParticipationsByContest = async (contest: string, locale?: LocaleCode) => {
  const client = connect();
  if (!client) {
    return null;
  }

  return cache(async () => (
    await client.getEntries<ParticipationEntrySkeleton>({
      content_type: 'participation',
      'fields.contest': contest,
      // @ts-ignore
      locale: getLocale(locale),
    })
      .then(getEntryFields<ParticipationData>)
      .then(sortParticipationList)
      .catch(() => null)
  ))();
};

export const loadProjectBySlug = async (slug: string, locale: LocaleCode) => {
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
