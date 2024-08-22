// TODO: different structore or general
import language from '@i18n/en/components/language';

const pages = {
  about: {
    title: 'About Me',
  },
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
      text: 'If my availability does not match your requirements, feel free to <contact>contact</contact> me anytime. We will find a solution to implement your project.',
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
    description: 'All the legal stuff.',

    owner: {
      title: 'Owner According to § 5 TMG (German Law)',
      ustidnr: 'USt-IdNr. gem. § 27a UStG: {id}',
    },
    contact: {
      goto: 'Send an email',
    },
    odr: {
      title: 'Online consumer dispute resolution',
      text: 'The European Union offers a platform for online dispute resolution (ODR) that can be found at <link>ec.europa.eu/consumers/odr</link>. Consumers have the opportunity to use this platform to resolve their disputes.<br></br>I am not willing or obliged to participate in a dispute resolution proceedings in front of a consumer arbitration body.',
    },

    liability: 'Liability for Content',
    disclaimer: {
      title: 'Disclaimer',
      text: 'The content of my website has been compiled with meticulous care and to the best of my knowledge. However, I cannot assume any liability for the up-to-dateness, completeness or accuracy of any of the pages. Pursuant to section 7, para. 1 of the TMG (German law), I am liable for my own content on these pages in accordance with general laws. However, pursuant to sections 8 to 10 of the TMG, I am not under obligation to monitor external information provided or stored on my website. Once I have become aware of a specific infringement of the law, I will remove the content in question as soon as possible. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to me.',
    },
    links: {
      title: 'External links',
      text: 'My website contains links to the websites of third parties (\"external links\"). As the content of these websites is not under my control, I cannot assume any liability for such external content. In all cases, the provider of information of the linked websites is liable for the content and accuracy of the information provided. At the point in time when the links were placed, no infringements of the law were recognisable to me. As soon as an infringement of the law becomes known to me, I will remove the link in question as soon as possible.',
    },
    copyright: {
      title: 'Copyright and trademarks',
      text: 'The content and works published on this website are governed by the copyright laws of Germany. Any duplication, processing, distribution or any form of utilisation beyond the scope of copyright law shall require the prior written consent of the author or authors in question.',
    },
    violations: {
      title: 'Notice of legal violations',
      text: 'In case you notice any legal violations on my website, please let me know. I will remove illegal content and links immediately as soon as I became aware of them.',
    },
  },
  privacy: {
    title: 'Data Privacy',
    description: 'Your data is important. Please have a look at how I handle the data.',
  },
  projects: {
    title: 'Projects',
    description: 'Get an overview of my completed and ongoing projects.',
    details: {
      title: 'Project Details',
      company: 'Company',
      timeSpan: 'Time span',
      type: 'Project type',
    },
    types: {
      employee: 'Employee',
      founder: 'Founder',
      freelance: 'Freelance',
      private: 'Private',
      volunteer: 'Volunteer',
    },
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
};

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },

  // layout

  layout: {
    footer: {
      imprint: pages.imprint.title,
      privacy: pages.privacy.title,
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
        about: pages.about.title,
        resume: pages.resume.title,
        projects: pages.projects.title,
        contact: pages.contact.title,

        close: 'Close navigation',
        open: 'Open navigation',
      },
    },
  },

  // TODO: check if needed
  language,
  pages,

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
  certificationList: {
    error: 'There was an error loading the certifications.',
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
