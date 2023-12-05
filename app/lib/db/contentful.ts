import { locale } from '@/services/utils';
import { sortCareerList } from '@/models/career';
import { ProjectData } from '@/models/project';
import { Database } from './interface';
import { AvailabilityData } from '@/models/availability';

const baseUrl = `${process.env.CONTENTFUL_HOST}/spaces/${process.env.CONTENTFUL_SPACE
  }/environments/${process.env.CONTENTFUL_ENVIRONMENT || 'master'}`;
const options = {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
  },
};

interface ContentfulInfo {
  sys: {
    id: string;
    type: string;
    linkType: string;
  }
}

type ContentfulFields = { [key: string]: any };

interface ContentfulEntry<T extends ContentfulFields> {
  metadata: {
    tags: string[];
  };
  sys: {
    space: ContentfulInfo;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: ContentfulInfo;
    revision: number;
    contentType: ContentfulInfo;
    locale: string;
  };
  fields?: T;
}

interface ContentfulIncludes<T extends ContentfulFields> {
  [type: string]: ContentfulEntry<T> | ContentfulEntry<T>[];
}

interface ContentfulResponse<T extends ContentfulFields> {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: ContentfulEntry<T>[];
  includes?: ContentfulIncludes<T>;
}

const getFields = <T extends ContentfulFields>(
  entry: ContentfulEntry<T>,
  includes?: ContentfulIncludes<T>,
): T => {
  if (entry.fields) {
    for (let key in entry.fields) {
      const value = entry.fields[key] as ContentfulEntry<T> | ContentfulEntry<T>[];

      if (Array.isArray(value) && value[0]?.sys) {
        // @ts-ignore
        entry.fields[key] = value.map((e) => getFields(e, includes));

      } else if ((value as ContentfulEntry<T>).sys) {
        // @ts-ignore
        entry.fields[key] = getFields(value as ContentfulEntry<T>, includes);
      }
    }

    return entry.fields;
  }

  if (includes) {
    const sys = entry.sys as unknown as { linkType: string; id: string };

    return (
      (Array.isArray(includes[sys.linkType])
        ? includes[sys.linkType]
        : [includes[sys.linkType]]) as ContentfulEntry<T>[]
    ).find((e) => e.sys.id === sys.id)?.fields!;
  }

  return {} as T;
};

const parseResponse = <T extends ContentfulFields>(response: ContentfulResponse<T>) => {
  if (Array.isArray(response.items)) {
    return response.items.map((e) => getFields(e, response.includes));
  }

  return [];
}

const localeParam = `locale=${locale}`;

const contentful: Database = {
  loadAvailability: async () => (
    fetch(`${baseUrl}/entries?content_type=availability`, options)
      .then((res) => res.json())
      .then((res) => parseResponse<AvailabilityData>(res)[0])
  ),

  loadCareer: async () => (
    fetch(
      `${baseUrl}/entries?content_type=career&${localeParam}&fields.highlight=true`,
      options,
    )
      .then((res) => res.json())
      .then((res) => parseResponse<ProjectData>(res))
      .then(sortCareerList)
  ),

  loadProjects: async (highlights = false) => (
    fetch(
      `${baseUrl}/entries?content_type=project&${localeParam}${highlights ? '&fields.highlight=true' : ''}`,
      options,
    )
      .then((res) => res.json())
      .then((res) => parseResponse<ProjectData>(res))
      .then(sortCareerList)
      .then((projects) => projects.map((p) => ({
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
      })))
  ),
  loadProjectBySlug: async (slug: string) => (
    fetch(`${baseUrl}/entries?content_type=project&${localeParam}&fields.slug=${slug}`, options)
      .then((res) => res.json())
      .then((res) => parseResponse<ProjectData>(res)[0])
  ),
};

export default contentful;
