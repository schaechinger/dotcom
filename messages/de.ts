// TODO: different structore or general
import language from '@i18n/de/components/language';

const pages = {
  about: {
    title: 'Über mich',
  },
  certifications: {
    title: 'Zertifizierungen',
    description: 'Meine Zertifizierungen im Überblick.',
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Der erste Schritt liegt bei dir.',
    description: 'Hier kannst du auf schnellem Weg mit mir in Kontakt treten.',

    text: 'Melde dich gerne und wir setzen dein Vorhaben so um, wie du es dir vorstellst!',
    availability: 'Meine Verfügbarkeit',

    form: {
      name: 'Name',
      mail: 'E-Mail-Adresse',
      message: 'Nachricht',
      submit: 'Absenden',
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
  },
  home: {
    about: {
      title: 'Servus, ich bin Manuel.',
      text: [
        'Seit über zehn Jahren entwickle ich professionelle Anwendungen sowohl im Backend als auch im Frontend. Ich habe mich auf <highlight>JavaScript</highlight> spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an Möglichkeiten und Einsatzgebieten bietet.',
        'Meine Aufgabenbereiche erstrecken sich über komplexe APIs mit <highlight>Node.js</highlight>, performante Frontends mit <highlight>Vue.js</highlight> und <highlight>React</highlight>, Absicherung von Systemen sowie Deployment und Übergabe an Kunden.',
        'Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die Teilnahmen an den sechs Major Marathons, von denen ich bis auf Boston schon fünf abschließen konnte.',
      ],
      goto: 'Mehr zu meiner Tätigkeit',
    },
    availability: {
      title: 'Aktuelle Verfügbarkeit',
      text: 'Auch wenn meine Verfügbarkeit für die Bedürfnisse nicht ausreicht, <contact>kontaktiere</contact> mich gerne. Wir finden einen Weg, dein Projekt umzusetzen.',
    },
    certifications: {
      title: 'Zertifizierungen',
    },
    contact: {
      title: 'Kontakt',
      text: 'Kontaktiere mich gerne um gemeinsam dein Vorhaben umzusetzen.',
      goto: 'Kontakt aufnehmen',
    },
    experience: {
      title: 'Berufliche Erfahrung',
    },
    projects: {
      title: 'Aktuelle Projekte',
    },
  },
  imprint: {
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
  },
  privacy: {
    title: 'Datenschutz',
  },
  projects: {
    title: 'Projekte',
    description: 'Erhalte hier einen Überblick über meine bisherigen Projekte.',
    details: {
      title: 'Projektdetails',
      timeSpan: 'Zeitspanne',
      type: 'Projektart',
      company: 'Firma',
    },
  },
  resume: {
    title: 'Berufserfahrung',
    description: 'Erfahre mehr über meinen beruflichen Werdegang.',
    certifications: {
      title: 'Zertifizierungen',
    },
    skills: {
      title: 'Fähigkeiten',
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
        about: pages.about.title,
        resume: pages.resume.title,
        projects: pages.projects.title,
        contact: pages.contact.title,

        close: 'Menü schließen',
        open: 'Menü öffnen',
      },
    },
  },

  language,
  pages,

  // components

  availability: {
    days: '{days, plural, =0 {Nur Kleinprojekte} other {d / Woche}}',
  },
  careerList: {
    error: 'Leider konnten die bisherigen Positionen nicht geladen werden.',
    goto: {
      resume: 'Vollständigen Werdegang ansehen',
      download: 'Lebenslauf herunterladen',
    },
  },
  projectList: {
    error: 'Leider konnten die bisherigen Projekte nicht geladen werden.',
    goto: 'Alle Projekte ansehen',
  },
  themeToggle: {
    mode: {
      dark: 'dunkel',
      light: 'hell',
      system: 'automatisch',
    },
    toggle: 'Farbschema wechseln',
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
