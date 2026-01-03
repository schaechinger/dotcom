import { LocaleCode } from "@lib/router";

type CacheType<T> = T[];

type CacheData = {
  [key: string]: CacheType<unknown>;
};

declare global {
  var cache: CacheData;
}

if (!global.cache) {
  global.cache = {};
}

const cache: CacheData = global.cache;

export const getCacheData = <T>(key: string, locale: LocaleCode) => {
  const items = cache[`${key}::${locale}`] as CacheType<T> | undefined;

  return items || [];
};

export const setCacheData = <T>(key: string, locale: LocaleCode, items: CacheType<T>) => {
  const cacheKey = getCacheKey(key, locale);

  if (items.length) {
    console.log(`set cache ${cacheKey} (${items.length})`);

    cache[cacheKey] = items;
  }
};

export const resetCache = () => {
  for (const key in cache) {
    console.log(`reset cache key ${key}`);
    cache[key] = [];
  }
};

const getCacheKey = (key: string, locale: LocaleCode) => `${key}::${locale}`;
