import { getCacheData, setCacheData } from '@lib/cache';
import { loadCareer as loadContentfulCareer } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { HistoryType } from '@models/history';
import { type CareerData } from '@models/career';

const cacheKey = "career";

export const loadCareer = async (locale: LocaleCode, type?: HistoryType) => {
  let career = getCacheData<CareerData>(cacheKey, locale);

  if (!career.length) {
    await initCareer(locale);

    career = getCacheData<CareerData>(cacheKey, locale);
  }

  return career.filter((item) => type ? type === item.type : 'education' !== item.type);
};

export const initCareer = async (locale: LocaleCode) => {
  let career = getCacheData(cacheKey, locale).length;
  if (!career) {
    const data = await loadContentfulCareer(locale);

    setCacheData(cacheKey, locale, data || []);

    career = getCacheData(cacheKey, locale).length;
  }

  return career;
};