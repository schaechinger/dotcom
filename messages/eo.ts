import 'server-only';

/**
 * Esperanto language file.
 * 
 * Code: eo
 * Name: Esperanto
 */

const general = {
  meta: {
    description: '',
  },
};

// pages

const about = {
  title: 'Pri mi',
  pageTitle: 'Saluton, mi estas Manuel.',
};

const home = {
  about: {
    title: about.pageTitle,
  },
};

const projects = {
  title: 'Projektoj',
};

const translations = {
  general,

  pages: {
    about,
    home,
    projects,
  },

  // layout

  layout: {},

  // components
};

export default translations;
