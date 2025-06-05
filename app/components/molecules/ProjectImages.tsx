'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useState } from 'react';

import { IMAGE_HOST } from '@app/config';
import { getImageLabel } from '@lib/images';
import { type LocaleCode } from '@lib/router';
import { type ProjectImage } from '@models/project';

type Props = {
  slug: string;
  images: ProjectImage[];
};

const ProjectImages = ({ slug, images }: Props) => {
  const locale = useLocale() as LocaleCode;
  const [selected, setSelected] = useState(0);
  const description = getImageLabel(images[selected], locale);

  return (
    <div className="grid gap-4 mt-10">
        <div className="-mx-4 sm:-mx-2">
            <Image
              src={`${IMAGE_HOST}/projects/${slug}/${images[selected].src}`}
              width={1024}
              height={768}
              alt={description}
              className="h-auto max-w-full border-y-2 sm:border-x-2 sm:rounded-md border-neutral-300/30 dark:border-dark-600/50"
              sizes="(max-width: 640px) 100vw, 1024px"
              priority
            />
            {!!description && <p className="text-sm mt-2 px-4 sm:px-2">{description}</p>}
        </div>
        { 1 < images.length
          && <div className="grid grid-cols-6 gap-x-2">
            { images.map((image, i) => (
              <div key={image.src} className="cursor-pointer" onClick={() => setSelected(i)}>
                <Image
                  src={`${IMAGE_HOST}/projects/${slug}/${image.src}`}
                  width={160}
                  height={120}
                  alt={getImageLabel(image, locale)}
                  sizes="(max-width: 1024px) 17vw, 139px"
                  className={clsx('h-auto max-w-full rounded-sm border-neutral-300/30 dark:border-dark-600/50', i !== selected && 'border-2')}
                />
              </div>
            )) }
        </div> }
      </div>
  );
};

export default ProjectImages;
