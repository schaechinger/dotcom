import type { LocaleCode } from '@lib/router';
import { ProjectImage } from '@models/project';

export const getImageLabel = (image: ProjectImage, locale: LocaleCode) => (
  image[locale]?.label || image.label || ''
);
