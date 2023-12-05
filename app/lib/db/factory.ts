import contentful from './contentful';

export const getDatabase = (type: 'contentful' | 'mongodb' = 'contentful') => {
  switch (type) {
    case 'contentful':
      return contentful;

    default:
      return null;
  }
};
