'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useState } from 'react';

import { type LanguageCode } from '@/i18n';
import { IMAGE_HOST } from '@app/config';
import { type ProjectImage } from '@models/project';

type Props = {
  slug: string;
  images: ProjectImage[];
};

const ProjectImages = ({ slug, images }: Props) => {
  const locale = useLocale() as LanguageCode;
  const [selected, setSelected] = useState(0);

  const getImageLabel = (image: ProjectImage) => (
    image[locale]?.label || image.label || ''
  );

  return (
    <div className="grid gap-4 mt-10">
        <div>
            <Image
              src={`${IMAGE_HOST}/projects/${slug}/${images[selected].src}`}
              width={1024}
              height={576}
              alt={getImageLabel(images[selected])}
              className="h-auto max-w-full rounded-lg"
            />
        </div>
        { 1 < images.length
          && <div className="grid grid-cols-6 gap-x-2">
            { images.map((image, i) => (
              <div key={image.src} className="cursor-pointer" onClick={() => setSelected(i)}>
                <Image
                  src={`${IMAGE_HOST}/projects/${slug}/${image.src}`}
                  width={160}
                  height={90}
                  alt={getImageLabel(image)}
                  className={`h-auto max-w-full rounded-lg${i === selected ? ' border-2' : ''} border-slate-300`}
                />
              </div>
            )) }
        </div> }
      </div>
  );
};

export default ProjectImages;
