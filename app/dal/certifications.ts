import { getCacheData, setCacheData } from '@lib/cache';
import { loadCertifications as loadContentfulCertifications } from '@lib/contentful';
import { LocaleCode } from '@lib/router';
import { type CertificationData } from '@models/certification';

const cacheKey = "certifications";

export const loadCertifications = async (locale: LocaleCode) => {
  let certifications = getCacheData<CertificationData>(cacheKey, locale);

  if (!certifications.length) {
    await initCertifications(locale);
    certifications = getCacheData<CertificationData>(cacheKey, locale);
  }

  return certifications;
};

export const initCertifications = async (locale: LocaleCode) => {
  let certifications = getCacheData(cacheKey, locale).length;
  if (!certifications) {
    const data = await loadContentfulCertifications(locale);

    setCacheData(cacheKey, locale, data || []);

    certifications = getCacheData(cacheKey, locale).length;
  }

  return certifications;
};