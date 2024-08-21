import availability from '@i18n/de/components/availability';
import careerList from '@i18n/de/components/careerList';
import footer from '@i18n/de/components/footer';
import header from '@i18n/de/components/header';
// TODO: different structore or general
import language from '@i18n/de/components/language';
import projectList from '@i18n/de/components/projectList';
import themeToggle from '@i18n/de/components/themeToggle';
import timeSpan from '@i18n/de/components/timeSpan';

import errors from '@i18n/de/errors';
import homePage from '@i18n/de/pages/home';
import projectsPage from '@i18n/de/pages/projects';
import resumePage from '@i18n/de/pages/resume';

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },

  // components
  availability,
  careerList,
  footer,
  header,
  language,
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
