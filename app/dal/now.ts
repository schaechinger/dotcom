import { getCacheData, setCacheData } from '@lib/cache';
import { loadNow as loadContentfulNow } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type NowActivityData } from '@models/now';

const cacheKey = "now";

export const loadNow = async (locale: LocaleCode) => {
  let now = getCacheData<NowActivityData>(cacheKey, locale);

  if (!now.length) {
    await initNow(locale);
    now = getCacheData<NowActivityData>(cacheKey, locale);
  }

  return now[0] || null;
};

export const initNow = async (locale: LocaleCode) => {
  let now = getCacheData(cacheKey, locale).length;
  if (!now) {
    const data = await loadContentfulNow(locale);

    setCacheData(cacheKey, locale, [data]);

    now = getCacheData(cacheKey, locale).length;
  }

  return now;
};