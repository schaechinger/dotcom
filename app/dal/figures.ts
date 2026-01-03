import { getCacheData, setCacheData } from '@lib/cache';
import { loadFigures as loadContentfulFigures } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type FiguresData } from '@models/figures';

const cacheKey = "figures";

export const loadFigures = async (year: number) => {
  let figures = getCacheData<FiguresData>(cacheKey, "en");

  if (!figures.length) {
    await initFigures("en");
    figures = getCacheData<FiguresData>(cacheKey, "en");
  }

  return figures.find((f) => +f.year === year) || {} as FiguresData;
};

export const initFigures = async (locale: LocaleCode) => {
  let figures = getCacheData(cacheKey, locale).length;
  if (!figures) {
    const data = await loadContentfulFigures();

    setCacheData(cacheKey, locale, data || []);

    figures = getCacheData(cacheKey, locale).length;
  }

  return figures;
};