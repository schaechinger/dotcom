/**
 * German language file.
 * 
 * Code: de
 * Name: Deutsch
 */

const general = {
  meta: {
    description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
  },
};

// pages

const about = {
  title: 'Über mich',
};

const certifications = {
  title: 'Zertifizierungen',
  description: 'Meine Zertifizierungen im Überblick.',
};

const contact = {
  title: 'Kontakt',
  subtitle: 'Der erste Schritt liegt bei dir.',
  description: 'Hier kannst du auf schnellem Weg mit mir in Kontakt treten.',

  text: 'Melde dich gerne und wir setzen dein Vorhaben so um, wie du es dir vorstellst!',
  availability: 'Meine Verfügbarkeit',

  form: {
    name: 'Name',
    nameError: 'Bitte gib deinen Namen an.',
    email: 'E-Mail-Adresse',
    emailError: 'Bitte gib deine E-Mail-Adresse an.',
    message: 'Nachricht',
    messageError: 'Bitte schildere dein Anliegen.',
    submit: 'Absenden',
    submitError: 'Deine Nachricht konnte nicht gesendet werden.',
    successTitle: 'Deine Anfrage wurde versendet!',
    successText: 'Danke für deine Nachricht, ich werde mich zeitnah bei dir melden.',
  },

  types: {
    call: {
      title: 'Telefonisch',
      goto: 'Jetzt anrufen',
    },
    mail: {
      title: 'Per Mail',
      goto: 'E-Mail senden',
    },
    write: {
      title: 'Direkt schreiben',
    },
  },
};

const home = {
  about: {
    title: 'Servus, ich bin Manuel.',
    text: [
      'Seit über zehn Jahren entwickle ich professionelle Anwendungen sowohl im Backend als auch im Frontend. Ich habe mich auf <highlight>JavaScript</highlight> spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an Möglichkeiten und Einsatzgebieten bietet.',
      'Meine Aufgabenbereiche erstrecken sich über komplexe APIs mit <highlight>Node.js</highlight>, performante Frontends mit <highlight>React</highlight> und <highlight>Vue.js</highlight>, Absicherung von Systemen sowie Deployment und Übergabe an Kunden.',
      'Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die Teilnahmen an den sechs Major Marathons, von denen ich bis auf Boston schon fünf abschließen konnte.',
    ],
    goto: 'Mehr zu meiner Tätigkeit',
  },
  availability: {
    title: 'Aktuelle Verfügbarkeit',
    text: 'Auch wenn meine Verfügbarkeit für die Bedürfnisse nicht ausreicht, <contact>kontaktiere</contact> mich gerne. Wir finden einen Weg, dein Projekt umzusetzen.',
  },
  certifications: {
    title: certifications.title,
  },
  contact: {
    title: contact.title,
    text: 'Kontaktiere mich gerne um gemeinsam dein Vorhaben umzusetzen.',
    goto: 'Kontakt aufnehmen',
  },
  experience: {
    title: 'Berufliche Erfahrung',
  },
  projects: {
    title: 'Aktuelle Projekte',
  },
};

const imprint = {
  title: 'Impressum',
  description: 'All die wichtigen rechtlichen Themen.',

  owner: {
    title: 'Eigentümer gemäß § 5 TMG',
    ustidnr: 'USt-IdNr. gem. § 27a UStG: {id}',
  },
  contact: {
    goto: 'E-Mail senden',
  },
  odr: {
    title: 'Online-Streitbeilegung',
    text: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die du unter <link>ec.europa.eu/consumers/odr</link> findest. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.<br></br>Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bin ich nicht verpflichtet und nicht bereit.',
  },

  liability: 'Haftung für Inhalte',
  disclaimer: {
    title: 'Haftungsausschluss',
    text: 'Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach meinem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von Verbrauchern) handelt. Ich behalte mir vor, die Inhalte vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.',
  },
  links: {
    title: 'Links auf fremde Webseiten',
    text: 'Die Inhalte fremder Webseiten, auf die ich direkt oder indirekt verweise, liegen außerhalb meines Verantwortungsbereiches und ich mache sie mir nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehme ich keine Verantwortung.',
  },
  copyright: {
    title: 'Urheberrechte und Markenrechte',
    text: 'Alle auf dieser Website dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen meinen Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.',
  },
  violations: {
    title: 'Hinweise auf Rechtsverstöße',
    text: 'Solltest du innerhalb meines Internetauftritts Rechtsverstöße bemerken, bitte ich dich mich auf diese hinzuweisen. Ich werde rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.',
  },
};

const privacy = {
  title: 'Datenschutz',
  description: 'Deine Daten sind wichtig, lies dir daher durch wie ich mit Daten umgehe.',
  imprint: imprint.title,
};

const projects = {
  title: 'Projekte',
  description: 'Erhalte hier einen Überblick über meine bisherigen Projekte.',
  details: {
    title: 'Projektdetails',
    company: 'Firma',
    timeSpan: 'Zeitspanne',
    type: 'Projektart',

    goto: {
      projects: 'Zur Projektliste',
    },

    description: 'Worum es geht',
    requirements: 'Anforderungen',
    goal: 'Ziel des Projekts',
    implementation: 'Umsetzung des Projekts',
    features: 'Features',
  },
  links: {
    title: 'Links',
    internal: 'Das Projekt wird intern verwendet und ist daher nicht öffentlich zugänglich.',
    project: 'Das Projekt findest du auf <link></link>.',
    code: 'Den Code zum Projekt findest du auf <link></link>.',
    package: 'Du kannst das Package mit <link></link> in dein Projekt einbinden.'
  },
  types: {
    employee: 'Angestellter',
    founder: 'Gründer',
    freelance: 'Freiberuflich',
    private: 'Privat',
    volunteer: 'Ehrenamtlich',
  },
};

const resume = {
  title: 'Berufserfahrung',
  description: 'Erfahre mehr über meinen beruflichen Werdegang.',
  certifications: {
    title: certifications.title,
  },
  skills: {
    title: 'Fähigkeiten',
    languages: 'Programmiersprachen',
    frameworks: 'Frameworks & Librarys',
    databases: 'Datenbanken',
    tools: 'Tools & Sonstiges',
  },
};

const work = {
  title: 'Meine Tätigkeit',
  description: 'Ein Einblick in meine Tätigkeitsfelder sowie meine technischen Fähigkeiten.',
  text: [
    'In zahlreichen Projekten konnte ich erfolgreich den gesamten Projektzyklus von der Idee bis hin zum fertigen Produkt begleiten und war sowohl beratend als auch als Entwickler tätig.',
    'Im Rahmen meiner freiberuflichen Tätigkeit kann ich entweder auf Stundenbasis oder auf Wunsch auf Paketbasis arbeiten. Dabei biete ich verschiedene Leistungen an:',
  ],
  implementation: {
    title: 'Umsetzung',
    text: [
      'Ich unterstütze aktiv die Implementierung des Projekts und nutze meine Fähigkeiten, um das bestmögliche Produkt zu erhalten.',
      'Meist im JavaScript-Umfeld, sowohl im Backend mit Node.js und TypeScript als auch im Frontend mit React, Vue.js und SASS.',
    ],
  },
  concept: {
    title: 'Konzeption & Architektur',
    text: [
      'Noch vor der ersten Zeile Code steht die durchdachte Konzeption der Projektbasis und die Planung der Architektur an.',
      'Hier helfe ich beim Entwurf einer leistungsfähigen und langlebigen Software Architektur und einem stimmigen Gesamtkonzept.',
    ],
  },
  consulting: {
    title: 'Beratung',
    text: [
      'Hier geht es um die Überwindung von aufgetretenen Problemen, der Migration von Systemen oder einer beliebigen anderen Herausforderung.',
      'Kontaktiere mich gerne mit deinem spezifischen Anliegen, um gemeinsam eine Lösung dafür zu finden.',
    ],
  },
  goto: {
    projects: 'Meine bisherigen Projekte',
  },
  stack: {
    title: 'Meine Basisstack',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Datenbanken',
    deployment: 'CI & CD',
    base: 'Basis',
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
    work,
  },

  // layout

  layout: {
    footer: {
      imprint: imprint.title,
      privacy: privacy.title,
      dev: 'Mit viel <love></love> in München entwickelt.',
      copyright: '© {year} Manuel Schächinger. Alle Rechte vorbehalten.',
    },
    header: {
      profession: 'Fullstack JavaScript Engineer',
      text: [
        'Senior Engineer für skalierbare und',
        'performance-kritische Softwaresysteme.',
      ],
      navigation: {
        about: about.title,
        resume: resume.title,
        projects: projects.title,
        contact: contact.title,

        close: 'Menü schließen',
        open: 'Menü öffnen',
      },
      themeToggle: {
        dark: 'Dunkles Design',
        light: 'Helles Design',
        system: 'automatisch',
        toggle: 'Farbschema wechseln',
      },
    },
  },

  // components

  availability: {
    days: '{days, plural, =0 {Nur Kleinprojekte} other {d / Woche}}',
  },
  careerList: {
    error: 'Leider können die bisherigen Positionen nicht geladen werden.',
    goto: {
      resume: 'Vollständigen Werdegang ansehen',
      download: 'Lebenslauf herunterladen',
    },
  },
  certificationList: {
    error: 'Leider können meine Zertifizierungen nicht geladen werden.',
  },
  projectList: {
    error: 'Leider können die bisherigen Projekte nicht geladen werden.',
    goto: 'Alle Projekte ansehen',
  },
  timeSpan: {
    span: 'bis',
    ongoing: 'seit',
  },

  errors: {
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Hier geht es nicht weiter, bitte geh zur Startseite oder wähle einen passenden Punkt aus dem Menü aus.',
      goto: 'Zur Startseite',
    },
    projectNotFound: {
      title: 'Projekt nicht gefunden',
      text: 'Dieses Projekt existiert nicht oder ist nicht mehr verfgbar. Sieh dir gerne meine anderen Projekte an und finde das für dich passende.',
      goto: 'Zur Projektliste',
    },
  },
};

export default translations;
