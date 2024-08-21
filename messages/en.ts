// TODO: different structore or general
import language from '@i18n/en/components/language';

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },

  // layout

  layout: {
    footer: {
      imprint: 'Imprint',
      privacy: 'Data Privacy',
      dev: 'Crafted with <love></love> in Munich.',
      copyright: '© {year} Manuel Schächinger. All rights reserved.',
    },
    header: {
      profession: 'Fullstack JavaScript Engineer',
      text: [
        'Senior engineer of scalable and',
        'performance critical software systems.'
      ],
      navigation: {
        about: 'About Me',
        resume: 'Experience',
        projects: 'Projects',
        contact: 'Contact',

        close: 'Close navigation',
        open: 'Open navigation',
      },
    },
  },

  // TODO: check if needed
  language,

  // components

  availability: {
    days: '{days, plural, =0 {Micro projects only} other {d / week}}',
  },
  careerList: {
    error: 'There was an error loading the career entries.',
    goto: {
      resume: 'Browse complete career',
      download: 'Download resume',
    },
  },
  projectList: {
    error: 'There was an error loading the project list.',
    goto: 'List all projects',
  },
  themeToggle: {
    mode: {
      dark: 'dark',
      light: 'light',
      system: 'auto',
    },
    toggle: 'Toggle theme',
  },
  timeSpan: {
    span: 'to',
    ongoing: 'since',
  },

  // pages

  pages: {
    certifications: {
      title: 'Certifications',
      description: 'An overview of my certifications.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'It\'s on you to do the first step.',
      description: 'This is the fastest way to get in touch with me.',

      text: 'Get in touch with me to make your idea become reality the way you want.',
      availability: 'My Availability',

      form: {
        name: 'Name',
        mail: 'Mail Address',
        message: 'Message',
        submit: 'Send',
      },

      types: {
        call: {
          title: 'Via phone',
          goto: 'Give me a call',
        },
        mail: {
          title: 'Via mail',
          goto: 'Drop me a mail',
        },
        write: {
          title: 'Write directly',
        },
      },
    },
    home: {
      about: {
        title: 'Hi, I\'m Manuel.',
        text: [
          'For more than 10 years I am developing professional applications in both backend and frontend. I focus on <highlight>JavaScript</highlight> as this language offers a wide variety of opportunities and fields of application.',
          'My responsibilities include complex APIs in <highlight>Node.js</highlight>, high performance frontends in <highlight>Vue.js</highlight> and <highlight>React</highlight>, protection of systems as well as deployment and handover to the customer.',
          'Besides working I am a passionate runner. My ultimate goal is to take part in all of the six World Major Marathons, of which I already participated in five except for Boston.',
        ],
        goto: 'More about my work',
      },
      availability: {
        title: 'Current Availability',
        text: [
          'If my availability does not match your requirements, feel free to ',
          ' me anytime. We will find a solution to implement your project.',
        ],
        goto: 'contact',
      },
      certifications: {
        title: 'Certifications',
      },
      contact: {
        title: 'Contact',
        text: 'Please get in touch with me to make your ideas become reality.',
        goto: 'Get in touch',
      },
      experience: {
        title: 'Professional Experience',
      },
      projects: {
        title: 'Current Projects',
      },
    },
    imprint: {
      title: 'Imprint',
    },
    projects: {
      title: 'Projects',
      description: 'Get an overview of my completed and ongoing projects.',
    },
    resume: {
      title: 'Experience',
      description: 'Learn more about my professional career and experiences.',
      certifications: {
        title: 'Certifications',
      },
      skills: {
        title: 'Skills',
      },
    },
  },

  errors: {
    notFound: {
      title: 'Page not found',
      text: 'Hier geht es nicht weiter, bitte geh zur Startseite oder wähle einen passenden Punkt aus dem Menü aus.',
      goto: 'Go back home',
    },
    projectNotFound: {
      title: 'Project not found',
      text: 'The project does not exist or is no longer available. Please have a look at my other projects and find a matching one.',
      goto: 'Go to project list',
    },
  },
};

export default translations;
