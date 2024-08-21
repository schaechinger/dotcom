// TODO: different structore or general
import language from '@i18n/de/components/language';

const translations = {
  general: {
    meta: {
      description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
    },
  },

  // layout

  layout: {
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
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
        about: 'Über mich',
        resume: 'Berufserfahrung',
        projects: 'Projekte',
        contact: 'Kontakt',

        close: 'Menü schließen',
        open: 'Menü öffnen',
      },
    },
  },

  // TODO: check if needed
  language,

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

  // pages

  pages: {
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
          'Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die Teilnahmen an den sechs großen Marathons der Welt, von denen ich bis auf Boston schon fünf abschließen konnte.',
        ],
        goto: 'Mehr zu meiner Tätigkeit',
      },
      availability: {
        title: 'Aktuelle Verfügbarkeit',
        text: [
          'Auch wenn meine Verfügbarkeit für die Bedürfnisse nicht ausreicht, ',
          ' mich gerne. Wir finden einen Weg, dein Projekt umzusetzen.',
        ],
        goto: 'kontaktiere',
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
    },
    projects: {
      title: 'Projekte',
      description: 'Erhalte hier einen Überblick über meine bisherigen Projekte.',
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
