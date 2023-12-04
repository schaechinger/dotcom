import { CareerData } from '@/models/career';
import { getDb } from './database';

export const sortCareerList = (a: CareerData, b: CareerData) => {
  const aDate = a.date[a.date.length - 1];
  const bDate = b.date[b.date.length - 1];

  if (a.date.length !== b.date.length) {
    return 1 === a.date.length ? -1 : 1;
  }

  if (aDate === bDate) {
    return a.title < b.title ? -1 : 1;
  }

  return aDate >= bDate ? -1 : 1;
};

export const loadCareer = async () => {
  const db = await getDb();
  const career = db?.collection('career');

  const results = (await career?.find({}).toArray()) as unknown as CareerData[] || [];

  return results
    .map((p) => ({
      ...p,
      _id: undefined,
    }))
    .sort(sortCareerList);
};
