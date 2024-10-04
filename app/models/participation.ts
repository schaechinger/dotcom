import { type LocaleCode } from '@lib/router';

export type SportType = 'running' | 'cycling' | 'multisport' | 'swimming';

export type ContestSection = {
  distance: number;
  sport: SportType;
  time?: string;
};

export type ParticipationData = {
  event: string;
  contest: string;
  slug: string;
  date: string;
  sport: SportType;
  sections: ContestSection[];
  time?: string;
  rank?: number;
};

export const sortParticipationList = <T extends ParticipationData>(list: T[]) => (
  list.toSorted((a, b) => {
    if (!!a.date !== !!b.date) {
      return a.date ? 1 : -1;
    }

    if (a.date === b.date) {
      return a.event < b.event ? -1 : 1;
    }

    return a.date >= b.date ? -1 : 1;
  })
);

export const getPb = <T extends ParticipationData>(list: T[]) => {
  let pb: ParticipationData = list[0];

  sortParticipationList(list).forEach((p) => {
    if (p.time && p.time <= (pb.time || Number.MAX_VALUE)) {
      pb = p;
    }
  });

  return pb;
};

const multiplier = [1, 60, 3600];

export const stringToSegmentTime = (string = ''): number => {
  const parts = string.trim().split(':').map((p) => +(p.replace(',', '.')));

  parts.reverse();

  let time = 0;
  parts.forEach((t, i) => {
    time += t * multiplier[i];
  });

  return time;
};

export const segmentTimeToString = (time: number, forceTime = false, cutMs = false): string => {
  if (!time && !forceTime) {
    return '';
  }

  const parts: number[] = [];
  let rest = Math.abs(time);

  if (cutMs) {
    rest = Math.floor(rest);
  }

  [...multiplier].reverse().forEach((m) => {
    parts.push(Math.floor(rest / m));
    rest %= m;
  });

  while (2 < parts.length && !parts[0]) {
    parts.shift();
  }

  const string = parts.map((p, i) => {
    if (i >= parts.length - 2) {
      return `0${p}`.slice(-2);
    }

    return p;
  }).join(':');

  // check for milli seconds
  if (rest % 1) {
    return `${string}${(rest % 1).toFixed(3).replace('.', ',').substring(1).replace(/0+$/g, '')}`;
  }

  return string;
};

const KM_TO_M = 1000;
const MILE_TO_M = 1609.334;
const YARD_TO_M = 0.9144;

export const getSpeed = (participation: ParticipationData, locale: LocaleCode): string => {
  if (!participation.time || !(participation.sections || [])[0]?.distance) {
    return '';
  }

  const isMetric = 'en' !== locale;
  const factor = isMetric ? KM_TO_M : MILE_TO_M;
  const time = stringToSegmentTime(participation.time);
  const distance = participation.sections[0].distance;

  switch (participation.sport) {
    // pace per km
    case 'running':
      return `${segmentTimeToString(Math.round(time / (distance / factor))).replace(/^0/, '')
        } ${isMetric ? '/km' : '/mi'}`;

    // pace per 100m
    case 'swimming':
      return `${segmentTimeToString(Math.round(time / (distance / (
        isMetric ? KM_TO_M / 10 : YARD_TO_M * 100
      )))).replace(/^0/, '')} ${isMetric ? '/100m' : '/100yd'}`;

    // km/h
    default:
      return `${segmentTimeToString(Math.round(time / (distance / (
        isMetric ? KM_TO_M : MILE_TO_M)))).replace(/^0/, '')} ${isMetric ? 'km/h' : 'mph'}`;
  }
};
