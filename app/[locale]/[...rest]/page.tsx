import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
 
const CatchAllPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);

  notFound();
};

export default CatchAllPage;
