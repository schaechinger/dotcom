import 'server-only';

/**
 * German language file.
 *
 * Code: de
 * Name: Deutsch
 */

const general = {
  meta: {
    title: 'Manuel Schächinger – Fullstack TypeScript Engineer & Consultant',
    description: 'Senior Fullstack TypeScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
  },
  home: 'Startseite',
  address: {
    germany: 'Deutschland',
  },
  history: {
    types: {
      certificate: 'Zertifizierung',
      education: 'Akademische Ausbildung',
      employee: 'Angestellter',
      founder: 'Gründer',
      freelance: 'Freiberuflich',
      private: 'Privat',
      volunteer: 'Ehrenamtlich',
    },
  },
};

// pages

const about = {
  title: 'Über mich',
  pageTitle: 'Servus, ich bin Manuel.',
  description: 'Ein kurzer Steckbrief zu mir.',

  profile: {
    title: 'Kurz zu mir:',
    imageAlt: 'Vor dem Wall der Burg Osaka, Japan.',
    bullets: {
      age: 'Ich bin {age} Jahre alt.',
      location: 'In Ottobrunn lebe ich.',
      coffee: 'Mein Tag startet mit einem Kaffee.',
      work: 'Seit über {years} Jahren bin ich Softwareentwickler.',
      stack: 'Mein Fokus liegt auf <link>TypeScript</link>.',
      education: 'In <link>Informatik</link> habe ich einen Bachelor.',
      sports: '<link>Marathonlaufen</link> ist meine Leidenschaft.',
      medalmonday: '2022 habe ich <link>Medal Monday</link> mitgegründet.',
    },

    text: 'Das sollten die wichtigsten Eckpunkte sein. Wenn du mehr erfahren möchtest, sie dir bitte die anderen Seiten an:',
    goto: {
      resume: 'Mehr über meine Erfahrung',
      projects: 'Meine Projektliste',
    },
  },
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
    title: about.pageTitle,
    text: [
      'Seit über {years} Jahren entwickle ich professionelle Software-Anwendungen sowohl im Backend als auch im Frontend. Ich habe mich auf <highlight>TypeScript</highlight> spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an Möglichkeiten und Einsatzgebieten bietet, das sich mit Frameworks wie <highlight>Next.js</highlight> voll ausschöpfen lässt.',
      'Meine Aufgabenbereiche erstrecken sich über komplexe APIs mit <highlight>Node.js</highlight>, performante Frontends mit <highlight>React</highlight> und <highlight>Vue.js</highlight>, Absicherung von Systemen sowie Deployment und Übergabe an Kunden.',
      'Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die Teilnahme an den sechs Major Marathons, von denen ich bis auf Boston schon fünf abschließen konnte.',
    ],
    goto: {
      marathons: 'Meine sportlichen Erfolge',
      work: 'Mehr zu meiner Tätigkeit',
    },
  },
  availability: {
    title: 'Aktuelle Verfügbarkeit',
    text: 'Auch wenn meine Verfügbarkeit für deine Bedürfnisse nicht ausreicht, <contact>kontaktiere</contact> mich gerne. Wir finden einen Weg, dein Projekt umzusetzen.',
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
    title: 'Ausgewählte Projekte',
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

const now = {
  title: 'Now',
  pageTitle: 'Was ich gerade mache',
  description: 'Hier findest du meine aktuellen Neuigkeiten und Projekte, an denen ich arbeite.',
};

const privacy = {
  title: 'Datenschutz',
  description: 'Deine Daten sind wichtig, lies dir daher durch wie ich mit Daten umgehe.',

  overview: 'Inhaltsverzeichnis',
  responsible: {
    title: 'Verantwortlicher',
    goto: {
      imprint: imprint.title,
    },
  },
  revokation: {
    title: 'Widerruf deiner Einwilligung zur Datenverarbeitung',
    text: 'Nur mit deiner ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf deiner bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',
  },
  complaint: {
    title: 'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
    text: 'Als Betroffener steht dir im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz meines Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <link>https://www.bfdi.bund.de</link>',
  },
  dataTransfer: {
    title: 'Recht auf Datenübertragbarkeit',
    text: 'Dir steht das Recht zu, Daten, die ich auf Grundlage deiner Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeite, an dich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern du die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
  },
  information: {
    title: 'Recht auf Auskunft, Berichtigung, Sperrung und Löschung',
    text: 'Du hast jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten kannst du dir jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an mich wenden.',
  },
  ssl: {
    title: 'SSL- bzw. TLS-Verschlüsselung',
    text: 'Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die du an mich als Seitenbetreiber senden, nutzt meine Website eine SSL- bzw. TLS-Verschlüsselung. Damit sind Daten, die du über diese Website übermitteln, für Dritte nicht mitlesbar. Du erkennst eine verschlüsselte Verbindung an der „https://“ Adresszeile deines Browsers und am Schloss-Symbol in der Browserzeile.',
  },
  logs: {
    title: 'Server-Log-Dateien',
    text: [
      'In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die dein Browser automatisch an mich übermittelt. Dies sind:',
      'Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.',
    ],
    bullets: [
      'Besuchte Seite auf meiner Domain',
      'Datum und Uhrzeit der Serveranfrage',
      'Browsertyp und Browserversion',
      'Verwendetes Betriebssystem',
      'Referrer URL',
      'Hostname des zugreifenden Rechners',
      'IP-Adresse',
    ],
  },
  contact: {
    title: 'Kontaktformular',
    text: [
      'Per Kontaktformular übermittelte Daten werden einschließlich deine Kontaktdaten gespeichert, um dein Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne deine Einwilligung nicht statt.',
      'Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf deiner bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.',
      'Über das Kontaktformular übermittelte Daten verbleiben bei mir, bis du mich zur Löschung aufforderst, deine Einwilligung zur Speicherung widerrufst oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.',
    ],
  },
  cookies: {
    title: 'Cookies',
    text: [
      'Meine Website verwendet Cookies. Das sind kleine Textdateien, die dein Webbrowser auf deinem Endgerät speichert. Cookies helfen mir dabei, mein Angebot nutzerfreundlicher, effektiver und sicherer zu machen.',
      'Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende deiner Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf deinem Endgerät bestehen, bis du diese selbst löschen. Solche Cookies helfen mir, dich bei Rückkehr auf meine Website wiederzuerkennen.',
      'Mit einem modernen Webbrowser kannst du das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität meiner Website zur Folge haben.',
      'Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von dir erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website habe ich ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung meiner Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.',
    ],
  },
};

const projects = {
  title: 'Projekte',
  description: 'Erhalte hier einen Überblick über meine bisherigen Projekte.',
  details: {
    title: 'Projektdetails',
    company: 'Firma',
    timeSpan: 'Zeitraum',
    type: 'Projektart',

    goto: {
      projects: 'Zur Projektliste',
    },

    description: 'Worum es geht',
    requirements: 'Anforderungen',
    goal: 'Ziel des Projekts',
    implementation: 'Umsetzung des Projekts',
    features: 'Features',

    slug: {
      transportkit: {
        munich: 'München',
      }
    },
  },
  links: {
    title: 'Links',
    internal: 'Das Projekt wird intern verwendet und ist daher nicht öffentlich zugänglich.',
    project: 'Das Projekt findest du auf <link></link>.',
    code: 'Den Code zum Projekt findest du auf <link></link>.',
    package: 'Du kannst das Package mit <link></link> in dein Projekt einbinden.'
  },
};

const resume = {
  title: 'Berufserfahrung',
  description: 'Erfahre mehr über meinen beruflichen Werdegang.',
  certifications: {
    title: certifications.title,
  },
  education: {
    title: 'Akademischer Werdegang',
  },
  skills: {
    title: 'Fähigkeiten',
    languages: 'Programmiersprachen',
    frameworks: 'Frameworks & Librarys',
    databases: 'Datenbanken',
    tools: 'Tools & Sonstiges',
    auth: 'Authentifizierung',
  },
};

const sports = {
  title: 'Sportliche Erfolge',
  pageTitle: 'Meine sportlichen Erfolge',
  description: 'Meine persönlichen Marathon- und Ausdauersporterfolge.',
  text: 'Durch meine Leidenschaft zum Ausdauersport ist auch das Projekt Medal Monday entspanden, das ich seit 2022 zusammen mit Maik Paulus vorantreibe um allen Sportlern ein digitales Zuhause für ihre Wettkämpfe bereitzustellen.',
  goto: {
    medalmonday: 'Zu Medal Monday',
  },
  marathons: {
    title: 'Marathons',
    text: [
      'Seit 2017 trete ich regelmäßig bei Marathons rund um die Welt an. Mich reizt an dieser Distanz die lange Vorbereitung auf einen einzigen Tag und die mentalte Herausforderung, das letzte Viertel durchzuhalen und sich zu neuen Bestleistungen zu bringen.',
      'Für mein großes Ziel, die sechs Major Marathons in Tokio, Boston, London, Berlin, Chicago und New York City zu laufen fehlt mir nur noch ein Start in Boston.',
    ],
  },
  rank: 'Platz',
  speed: {
    pace: 'Pace',
    perHour: 'Geschw.',
  },
  time: 'Zeit',
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
      'Meist im TypeScript-Umfeld, sowohl im Backend mit Node.js oder Next.js als auch im Frontend mit React, Vue.js und SCSS.',
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
      social: 'Profile in Netz',
      languages: 'Sprachen',
      legal: 'Rechtliches',
      imprint: imprint.title,
      privacy: privacy.title,
      dev: 'Mit <tech></tech> und viel <love></love> in Ottobrunn entwickelt.',
      copyright: '© {year} Manuel Schächinger. Alle Rechte vorbehalten.',
    },
    header: {
      text: [
        'Senior Engineer für skalierbare und',
        'performance-kritische Softwaresysteme.',
      ],
      navigation: {
        home: general.home,
        about: about.title,
        resume: resume.title,
        projects: projects.title,
        contact: contact.title,
        now: now.title,

        imprint: imprint.title,
        privacy: privacy.title,

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
  nowList: {
    error: 'Leider können die aktuellen Neuigkeiten nicht geladen werden.',
    goto: 'Alle Neuigkeiten ansehen',
    updatedAt: 'Zuletzt aktualisiert am {date}',
  },
  projectList: {
    error: 'Leider können die bisherigen Projekte nicht geladen werden.',
    goto: '{count, plural, =0 {Alle Projekte ansehen} other {Alle # Projekte ansehen}}',
  },
  timeSpan: {
    duration: '{years, plural, =0 {} =1 {# Jahr} other {# Jahre}} {months, plural, =0 {} =1 {# Monat} other {# Monate}}',
    ongoing: 'seit {startDate}',
    period: '{startDate} - {endDate}',
    single: '{endDate}',
  },
  yearInFigures: {
    title: 'Mein Jahr in Zahlen',
    coffees: '{count, plural, =1 {Kaffee} other {Kaffees}}',
    marathons: '{count, plural, =1 {Marathon} other {Marathons}}',
    outages: '{count, plural, =1 {Serverausfall} other {Serverausfälle}}',
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
    konamiCode: {
      goto: 'Ich möchte einen Kaffee',
      subject: 'Anfrage über Homepage',
    },
  },
};

export default translations;
