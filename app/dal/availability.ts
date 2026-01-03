import { getCacheData, setCacheData } from '@lib/cache';
import { loadNow as loadContentfulAvailability } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type AvailabilityData } from '@models/availability';

const cacheKey = "availability";

export const loadAvailability = async () => {
  let availability = getCacheData<AvailabilityData>(cacheKey, "en");

  if (!availability.length) {
    await initAvailability("en");
    availability = getCacheData<AvailabilityData>(cacheKey, "en");
  }

  return availability[0] || null;
};

export const initAvailability = async (locale: LocaleCode) => {
  let availability = getCacheData(cacheKey, locale).length;
  if (!availability) {
    const data = await loadContentfulAvailability(locale);

    setCacheData(cacheKey, locale, [data]);

    availability = getCacheData(cacheKey, locale).length;
  }

  return availability;
};