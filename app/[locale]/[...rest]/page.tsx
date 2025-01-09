import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@app/interfaces';
 
const CatchAllPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  notFound();
};

export default CatchAllPage;
