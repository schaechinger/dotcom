'use client';

import Image from 'next/image';
import { useState } from 'react';

import { IMAGE_HOST } from '@app/config';
import type { ComponentProps } from '@app/interfaces';
import { type ProjectImage } from '@models/project';

interface Props extends ComponentProps {
  slug: string;
  images: ProjectImage[];
}

const ProjectImages = ({ slug, images, lang }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid gap-4 mt-10">
        <div>
            <Image
              src={`${IMAGE_HOST}/projects/${slug}/${images[selected].src}`}
              width={1024}
              height={576}
              alt={images[selected].label || ''}
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
                  alt={image[lang]?.label || image.label || ''}
                  className={`h-auto max-w-full rounded-lg${i === selected ? ' border-2' : ''} border-slate-300`}
                />
              </div>
            )) }
        </div> }
      </div>
  );
};

export default ProjectImages;
