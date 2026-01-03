import { getCacheData, setCacheData } from '@lib/cache';
import { loadParticipations as loadContentfulParticipations } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type ParticipationData } from '@models/participation';

const cacheKey = "participations";

export const loadParticipationsByContest = async (contest: string, locale: LocaleCode) => {
  let participations = getCacheData<ParticipationData>(cacheKey, locale);

  if (!participations.length) {
    await initParticipations(locale);
    participations = getCacheData<ParticipationData>(cacheKey, locale);
  }

  return participations;
};

export const initParticipations = async (locale: LocaleCode) => {
  let participations = getCacheData(cacheKey, locale).length;
  if (!participations) {
    const data = await loadContentfulParticipations(locale);

    setCacheData(cacheKey, locale, data || []);

    participations = getCacheData(cacheKey, locale).length;
  }

  return participations;
};