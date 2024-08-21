import availability from '@i18n/en/components/availability';
import careerList from '@i18n/en/components/careerList';
import footer from '@i18n/en/components/footer';
import header from '@i18n/en/components/header';
// TODO: different structore or general
import language from '@i18n/en/components/language';
import projectList from '@i18n/en/components/projectList';
import themeToggle from '@i18n/en/components/themeToggle';
import timeSpan from '@i18n/en/components/timeSpan';

import errors from '@i18n/en/errors';
import homePage from '@i18n/en/pages/home';
import projectsPage from '@i18n/en/pages/projects';
import resumePage from '@i18n/en/pages/resume';

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },

  layout: {
    footer,
    header,
  },

  // TODO: check if needed
  language,

  // components
  availability,
  careerList,
  projectList,
  themeToggle,
  timeSpan,

  // pages
  pages: {
    home: homePage,
    projects: projectsPage,
    resume: resumePage,
  },

  errors,
};

export default translations;
