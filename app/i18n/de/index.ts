import availability from './components/availability';
import careerList from './components/careerList';
import footer from './components/footer';
import header from './components/header';
// TODO: different structore or general
import language from './components/language';
import projectList from './components/projectList';
import themeToggle from './components/themeToggle';
import timeSpan from './components/timeSpan';

import homePage from './pages/home';
import projectsPage from './pages/projects';
import resumePage from './pages/resume';

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },
  components: {
    availability,
    careerList,
    footer,
    header,
    language,
    projectList,
    themeToggle,
    timeSpan,
  },
  pages: {
    home: homePage,
    projects: projectsPage,
    resume: resumePage,
  },
};

export default translations;
