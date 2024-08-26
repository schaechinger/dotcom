/**
 * English language file.
 * 
 * Code: en
 * Name: English
 */

const general = {
  meta: {
    description: 'Senior Fullstack JavaScript Engineer and consultant for complex and scalable software systems in Munich.',
  },
};

// pages

const about = {
  title: 'About Me',
};

const certifications = {
  title: 'Certifications',
  description: 'An overview of my certifications.',
};

const contact = {
  title: 'Contact',
  subtitle: 'It\'s on you to do the first step.',
  description: 'This is the fastest way to get in touch with me.',

  text: 'Get in touch with me to make your idea become reality the way you want.',
  availability: 'My Availability',

  form: {
    name: 'Name',
    nameError: 'Please enter your name.',
    email: 'Mail Address',
    emailError: 'Please enter your mail address.',
    message: 'Message',
    messageError: 'Please provide some details.',
    submit: 'Send',
    submitError: 'Your message could not be sent.',
    successTitle: 'Your inquiry has been sent!',
    successText: 'Thank you for your message, I will come back to you shortly.',
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
};

const home = {
  about: {
    title: 'Hi, I\'m Manuel.',
    text: [
      'For more than 10 years I am developing professional applications in both backend and frontend. I focus on <highlight>JavaScript</highlight> as this language offers a wide variety of opportunities and fields of application.',
      'My responsibilities include complex APIs in <highlight>Node.js</highlight>, high performance frontends in <highlight>React</highlight> and <highlight>Vue.js</highlight>, protection of systems as well as deployment and handover to the customer.',
      'Besides work I am a passionate runner. My ultimate goal is to take part in all of the six World Major Marathons, of which I already participated in five except for Boston.',
    ],
    goto: {
      marathons: 'My sports achievements',
      work: 'More about my work',
    },
  },
  availability: {
    title: 'Current Availability',
    text: 'If my availability does not match your requirements, feel free to <contact>contact</contact> me anytime. We will find a solution to implement your project.',
  },
  certifications: {
    title: certifications.title,
  },
  contact: {
    title: contact.title,
    text: 'Please get in touch with me to make your ideas become reality.',
    goto: 'Get in touch',
  },
  experience: {
    title: 'Professional Experience',
  },
  projects: {
    title: 'Current Projects',
  },
};

const imprint = {
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
};

const privacy = {
  title: 'Data Privacy',
  description: 'Your data is important. Please have a look at how I handle the data.',
  imprint: imprint.title,
};

const projects = {
  title: 'Projects',
  description: 'Get an overview of my completed and ongoing projects.',
  details: {
    title: 'Project Details',
    company: 'Company',
    timeSpan: 'Time span',
    type: 'Project type',

    goto: {
      projects: 'Go to projects',
    },

    description: 'What it is About',
    requirements: 'Requirements',
    goal: 'Project Goal',
    implementation: 'Project Implementation',
    features: 'Features',
  },
  links: {
    title: 'Links',
    internal: 'The project is used internal and can therefore not be linked.',
    project: 'The project can be found at <link></link>.',
    code: 'The source code of the project an be found at <link></link>.',
    package: 'You can integrate the package using <link></link> into your project.'
  },
  types: {
    employee: 'Employee',
    founder: 'Founder',
    freelance: 'Freelance',
    private: 'Private',
    volunteer: 'Volunteer',
  },
};

const resume = {
  title: 'Experience',
  description: 'Find out more about my professional career and experiences.',
  certifications: {
    title: certifications.title,
  },
  skills: {
    title: 'Skills',
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases',
    tools: 'Tools & Others',
  },
};


const sports = {
  title: 'My Sports Achievements',
  description: 'My personal marathons and endurance sports achivements.',
  text: 'My passion for endurance sport was the reason to kick off the project Medal Monday that I founded in 2022 together with Maik Paulus to provide all athletes a digital home for their event contests.',
  goto: {
    medalmonday: 'Visit Medal Monday',
  },
  marathons: {
    title: 'Marathons',
    text: [
      'Since 2017 I participate in Marathons around the globe. I like this distance because of the long preparation towards a single day and the mental challene of getting through the last quarter of the race and achieving new personal bests.',
      'To achieve my big goal of running the six Major Marathons in Tokyo, Boston, London, Berlin, Chicago and New York City I am only missing Boston.',
    ],
  },
  rank: 'Rank',
  speed: {
    pace: 'Pace',
    perHour: 'Speed',
  },
  time: 'Time',
};

const work = {
  title: 'My Work',
  description: 'An overview of my work areas and technical skills.',
  text: [
    'In numerous projects, I was able to participate in the complete project cycle from the idea to the finished product and worked both as consultant as well as developer',
    'As part of my freelance work, I can work on an hourly or, if desired, on a package basis. My service includes a variety of areas:',
  ],
  implementation: {
    title: 'Implementation',
    text: [
      'I actively support in the implementation of a product and use my skills to craft the best possible piece of software.',
      'Within the JavaScript ecosystem I work both in backend with Node.js and TypeScript and in the frontend with React, Vue.js and SASS.',
    ],
  },
  concept: {
    title: 'Conception & Architecture',
    text: [
      'Just before the first line of code is written, the project must already serve a strong foundation in architecture and design.',
      'I can help with the design of a powerful and long-lasting software architecture and a coherent global concept.',
    ],
  },
  consulting: {
    title: 'Consulting',
    text: [
      'This is all about solving problems, migrating systems or any other challenge that should be mastered.',
      'Please get in touch with me with your specific request so that we can find a solution for your situation.',
    ],
  },
  goto: {
    projects: 'Browse my projects',
  },
  stack: {
    title: 'My Stack',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    deployment: 'CI & CD',
    base: 'Foundation',
  },
};

const translations = {
  general,

  pages: {
    about,
    certifications,
    contact,
    home,
    imprint,
    privacy,
    projects,
    resume,
    sports,
    work,
  },

  // layout

  layout: {
    footer: {
      imprint: imprint.title,
      privacy: privacy.title,
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
        about: about.title,
        resume: resume.title,
        projects: projects.title,
        contact: contact.title,

        close: 'Close navigation',
        open: 'Open navigation',
      },
      themeToggle: {
        dark: 'Dark theme',
        light: 'Light theme',
        system: 'auto',
        toggle: 'Toggle theme',
      },
    },
  },

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
