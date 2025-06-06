import 'server-only';

/**
 * English language file.
 *
 * Code: en
 * Name: English
 */

const general = {
  meta: {
    title: 'Manuel Schächinger – Fullstack JavaScript Engineer & Consultant',
    description: 'Senior Fullstack JavaScript Engineer and consultant for complex and scalable software systems in Munich.',
  },
  home: 'Home',
  address: {
    germany: 'Germany',
  },
  history: {
    types: {
      certificate: 'Certification',
      education: 'Academic Education',
      employee: 'Employee',
      founder: 'Founder',
      freelance: 'Freelance',
      private: 'Private',
      volunteer: 'Volunteer',
    },
  },
};

// pages

const about = {
  title: 'About Me',
  pageTitle: 'Hi, I\'m Manuel.',
  description: 'A short profile of my details.',

  profile: {
    title: 'My Profile:',
    imageAlt: 'In front of the wall of Osaka Castle, Japan.',
    bullets: {
      age: 'I am {age} years old.',
      location: 'Ottobrunn is my base.',
      coffee: 'My days start with a coffee.',
      work: 'For more than {years} years I am a software engineer.',
      stack: 'My focus is on <link>JavaScript</link>.',
      education: 'I have a Bachelor\'s degree in <link>Computer Science</link>.',
      sports: '<link>Marathon running</link> is my passion.',
      medalmonday: 'In 2022 I co-founded <link>Medal Monday</link>.',
    },

    text: 'That should cover the key points. For more, please have a look at the other pages:',
    goto: {
      resume: 'Check out my experience',
      projects: 'Browse my project list',
    },
  },
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
      title: 'Phone',
      goto: 'Give me a call',
    },
    mail: {
      title: 'Email',
      goto: 'Drop me a mail',
    },
    write: {
      title: 'Message Me',
    },
  },
};

const home = {
  about: {
    title: about.pageTitle,
    text: [
      'For more than {years} years, I have been developing professional software applications in both backend and frontend. I focus on <highlight>JavaScript</highlight> as this language offers a wide variety of opportunities and fields of application.',
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
    ustidnr: 'Sales tax ID according to section 27a of the Sales Tax Law (UStG): {id}',
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

const now = {
  title: 'Now',
  pageTitle: 'What I am currently doing',
  description: 'This is a summary of my current doings and projects I work on.',
};

const privacy = {
  title: 'Data Privacy',
  description: 'Your data is important. Please have a look at how I handle the data.',

  overview: 'Table of Contents',
  responsible: {
    title: 'Responsible',
    goto: {
      imprint: imprint.title,
    },
  },
  revokation: {
    title: 'Revocation of Your Consent to Data Processing',
    text: 'Data processing operations are only possible with your explicit consent. You can revoke your previously given consent at any time. A simple, informal notification via email is sufficient for the revocation. The legality of the data processing carried out before the revocation remains unaffected by the revocation.',
  },
  complaint: {
    title: 'Right to Complain to the Responsible Supervisory Authority',
    text: 'As the person affected, you have the right to complain to the responsible supervisory authority in the event of a data protection violation. The responsible supervisory authority for data protection issues is the state data protection officer of the federal state in which my company is based. The following link provides a list of data protection officers and their contact details: www.bfdi.bund.de <link>https://www.bfdi.bund.de/EN/</link>',
  },
  dataTransfer: {
    title: 'Right to Data Portability',
    text: 'You have the right to have data that I process automatically based on your consent or in fulfillment of a contract handed over to you or to third parties. The data will be provided in a machine-readable format. If you request that the data be transferred directly to another responsible party, this will only be done if it is technically feasible.',
  },
  information: {
    title: 'Right to Information, Correction, Blocking and Deletion',
    text: 'You have the right at any time, within the framework of the applicable legal provisions, to free information about your stored personal data, the origin of the data, its recipients and the purpose of the data processing and, if applicable, a right to correction, blocking or deletion of this data. In this regard and for other questions on the subject of personal data, you can contact me at any time using the contact options listed in the imprint.',
  },
  ssl: {
    title: 'SSL or TLS Encryption',
    text: 'For security reasons and to protect the transmission of confidential content that you send to me as the website operator, my website uses SSL or TLS encryption. This means that data that you transmit via this website cannot be read by third parties. You can recognize an encrypted connection by the "https://" address line in your browser and the lock symbol in the browser line.',
  },
  logs: {
    title: 'Server-Log-Dateien',
    text: [
      'The website provider automatically collects and stores information in server log files that your browser automatically transmits to me. This is:',
      'This data is not merged with other data sources. The basis for data processing is Art. 6 Para. 1 lit. b GDPR, which permits the processing of data to fulfill a contract or pre-contractual measures.',
    ],
    bullets: [
      'Page visited on my domain',
      'Date and time of the server request',
      'Browser type and browser version',
      'Operating system used',
      'Referrer URL',
      'Host name of the accessing computer',
      'IP address',
    ],
  },
  contact: {
    title: 'Contact Form',
    text: [
      'Data transmitted via the contact form, including your contact details, are stored in order to process your request or to be available for follow-up questions. This data will not be passed on without your consent.',
      'The data entered in the contact form is processed exclusively on the basis of your consent (Art. 6 Para. 1 lit. a GDPR). You can revoke your consent at any time. An informal notification by email is sufficient for the revocation. The legality of the data processing operations carried out up to the revocation remains unaffected by the revocation.',
      'Data transmitted via the contact form will remain with me until you request me to delete it, revoke your consent to storage or there is no longer any need to store the data. Mandatory legal provisions - in particular retention periods - remain unaffected.',
    ],
  },
  cookies: {
    title: 'Cookies',
    text: [
      'My website uses cookies. These are small text files that your web browser stores on your device. Cookies help me to make my service more user-friendly, effective and secure.',
      'Some cookies are “session cookies.” Such cookies are automatically deleted at the end of your browser session. Other cookies, however, remain on your device until you delete them yourself. Such cookies help me to recognize you when you return to my website.',
      'With a modern web browser, you can monitor, restrict or prevent the setting of cookies. Many web browsers can be configured so that cookies are automatically deleted when the program is closed. Deactivating cookies can result in limited functionality on my website.',
      'The setting of cookies that are necessary for carrying out electronic communication processes or for providing certain functions you require (e.g. shopping cart) is based on Art. 6 Para. 1 lit. f GDPR. As the operator of this website, I have a legitimate interest in storing cookies to ensure that my services are technically error-free and run smoothly. If other cookies are set (e.g. for analysis functions), these will be dealt with separately in this privacy policy.',
    ],
  },
};

const projects = {
  title: 'Projects',
  description: 'Get an overview of my completed and ongoing projects.',
  details: {
    title: 'Project Details',
    company: 'Company',
    timeSpan: 'Period',
    type: 'Type',

    goto: {
      projects: 'Go to projects',
    },

    description: 'What it is About',
    requirements: 'Requirements',
    goal: 'Project Goal',
    implementation: 'Project Implementation',
    features: 'Features',

    slug: {
      transportkit: {
        munich: 'Munich',
      }
    },
  },
  links: {
    title: 'Links',
    internal: 'The project is used internal and can therefore not be linked.',
    project: 'The project can be found at <link></link>.',
    code: 'The source code of the project an be found at <link></link>.',
    package: 'You can integrate the package using <link></link> into your project.'
  },
};

const resume = {
  title: 'Experience',
  description: 'Find out more about my professional career and experiences.',
  certifications: {
    title: certifications.title,
  },
  education: {
    title: 'Educational',
  },
  skills: {
    title: 'Skills',
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases',
    tools: 'Tools & Others',
    auth: 'Authentication',
  },
};

const sports = {
  title: 'Sports Achievements',
  pageTitle: 'My Sports Achievements',
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
    now,
    privacy,
    projects,
    resume,
    sports,
    work,
  },

  // layout

  layout: {
    footer: {
      social: 'Profiles on the Web',
      languages: 'Languages',
      legal: 'Legal',
      imprint: imprint.title,
      privacy: privacy.title,
      dev: 'Crafted with <tech></tech> and <love></love> in Ottobrunn.',
      copyright: '© {year} Manuel Schächinger. All rights reserved.',
    },
    header: {
      text: [
        'Senior engineer for scalable and',
        'performance critical software systems.'
      ],
      navigation: {
        home: general.home,
        about: about.title,
        resume: resume.title,
        projects: projects.title,
        contact: contact.title,

        imprint: imprint.title,
        privacy: privacy.title,

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
      resume: 'Browse my career',
      download: 'Download resume',
    },
  },
  certificationList: {
    error: 'There was an error loading the certifications.',
  },
  projectList: {
    error: 'There was an error loading the project list.',
    goto: '{count, plural, =0 {List all projects} other {List all # projects}}',
  },
  timeSpan: {
    duration: '{years, plural, =0 {} =1 {# year} other {# years}} {months, plural, =0 {} =1 {# month} other {# months}}',
    ongoing: 'since {startDate}',
    period: '{startDate} to {endDate}',
    single: '{endDate}',
  },
  yearInFigures: {
    title: 'My Year in Figures',
    coffees: '{count, plural, =1 {Coffee} other {Coffees}}',
    marathons: '{count, plural, =1 {Marathon} other {Marathons}}',
    outages: '{count, plural, =1 {Server outage} other {Server outages}}',
  },

  errors: {
    notFound: {
      title: 'Page not Found',
      text: 'Hier geht es nicht weiter, bitte geh zur Startseite oder wähle einen passenden Punkt aus dem Menü aus.',
      goto: 'Go to homepage',
    },
    projectNotFound: {
      title: 'Project not Found',
      text: 'The project does not exist or is no longer available. Please have a look at my other projects and find a matching one.',
      goto: 'Go to project list',
    },
    konamiCode: {
      goto: 'Get a free coffee',
      subject: 'Project inquiry from website'
    },
  },
};

export default translations;
