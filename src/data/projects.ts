import { Project } from 'stores/project';

const projects: Project[] = [
  {
    title: 'Verleihplattform für Firmenfahrzeuge',
    key: 'brettl',
    description: 'Implementierung einer Plattform zur internen Vergabe von Fahrzeugen.',
    tags: [
      'Vue',
      'TypeScript',
      'Quasar',
      'Node.js',
    ],
    year: 2021,
    type: 'freelance',
    customer: {
      title: 'Motius GmbH',
      link: 'https://www.motius.de',
    },
    roles: [
      'dev',
    ],
  },
  {
    title: 'Event-Management für Biker',
    key: 'candy-event',
    description: 'Erstellung eines Frontends zur Verwaltung von Sportevents für namhafte Fahrradhersteller inklusive Kundenanmeldung für Events und Fahrradtests.',
    tags: [
      'Vue',
      'TypeScript',
      'Quasar',
    ],
    year: 2021,
    type: 'freelance',
    customer: {
      title: 'munchie Konsilium GmbH',
      link: 'http://www.munchiekonsilium.com',
    },
    roles: [
      'dev',
    ],
  },
  {
    title: 'Internetmarke',
    key: 'internetmarke',
    description: 'Eine Implementierung mehrerer APIs der Deutschen Post zum Erzeugen von digitalen Briefmarken in Node Anwendungen.  Weitere Informationen gibt es <a href="/projekte/internetmarke">hier</a>.',
    tags: [
      'Node.js',
      'TypeScript',
      'API',
    ],
    year: 2021,
    type: 'private',
    customer: {
      title: 'internetmarke',
      link: 'https://github.com/schaechinger/internetmarke',
    },
    roles: [
      'dev',
    ],
  },
  {
    title: 'Knowledge Graph',
    key: 'knowledge-graph',
    description: 'Konzeption und Entwicklung eines PoC für einen auf Neo4j basierenden Knowledge Graph für ein DAX-Unternehmen.',
    tags: [
      'Node.js',
      'TypeScript',
      'Neo4j',
      'GraphQL',
    ],
    year: 2021,
    type: 'freelance',
    customer: {
      title: 'Motius GmbH',
      link: 'https://www.motius.de',
    },
    roles: [
      'dev',
      'proto',
    ],
  },
  {
    title: 'Digitale Lieferbox',
    key: 'flyby',
    description: 'Konzeption und Umsetzung einer Software zur Steuerung und Verwaltung von Lieferboxen, die digitale Werbung schalten und Sensordaten lesen und auswerten können.',
    tags: [
      'Node.js',
      'TypeScript',
      'Docker',
      'Preact',
      'AWS',
    ],
    year: 2021,
    type: 'freelance',
    customer: {
      title: 'Kalaan GmbH',
      link: 'https://www.kalaan.de',
    },
    roles: [
      'dev',
      'concept',
      'consulting',
    ],
  },
  {
    title: 'Smarte Mensch-Maschine-Interaktion',
    key: 'wifi-gateway',
    description: 'Management von Fahrzeugdaten und Steuerung durch eine iOS App. Interaktion mit dem Fahrer mittels gesten- und mimikbasierter Personenerkennung.',
    tags: [
      'Node.js',
      'TypeScript',
      'MQTT',
    ],
    year: 2020,
    type: 'freelance',
    customer: {
      title: 'Motius GmbH',
      link: 'https://www.motius.de',
    },
    roles: [
      'dev',
      'proto',
    ],
  },
  {
    title: 'Housemaid',
    key: 'housemaid',
    description: 'Smart Home Verwaltungsoberfläche für einem Raspberry Pi Touch Display zur einfachen Steuerung von Licht, Heizung, Steckdosen und weiteren Geräten',
    tags: [
      'Node.js',
      'TypeScript',
      'Preact',
    ],
    year: 2020,
    type: 'private',
    customer: {
      title: 'housemaid',
      link: 'https://code.schaechinger.one/schaechinger/housemaid',
    },
    roles: [
      'dev',
    ],
  },
  {
    title: 'Fahrerassistenzsystem',
    key: 'betalabs',
    description: 'Implementierung einer sprachgesteuerten Oberfläche zur Abwicklung produktiver Aufgaben während der Fahrt.',
    tags: [
      'JavaScript',
      'Node.js',
      'TypeScript',
      'Azure',
    ],
    year: 2019,
    type: 'freelance',
    customer: {
      title: 'Motius GmbH',
      link: 'https://www.motius.de',
    },
    roles: [
      'dev',
      'proto',
    ],
  },
  {
    title: 'Automatisierung Kundenanbindung',
    key: 'mak-anbindung',
    description: 'Evaluierung geeigneter Softwarekomponenten und Implementierung eines Proof of Concepts zur automatisierten Anbindung mit einem Workflow-System unter Berücksichtigung gesetzlicher Grundlagen.',
    tags: [
      'Consulting',
      'JavaScript',
      'Node.js',
      'Deployment',
    ],
    year: 2019,
    type: 'freelance',
    customer: {
      title: 'Fonds Finanz Maklerservice GmbH',
      link: 'https://www.fondsfinanz.de',
    },
    roles: [
      'consulting',
      'dev',
      'proto',
    ],
  },
  {
    title: 'TransportKit',
    key: 'transportkit',
    description: 'TransportKit ist ein SASS Projekt, das die Styles für die Linienanzeigen des öffentlichen Nahverkehrs in München, NYC, London und weiteren Großstädten abbildet. So kann man auf einfache Weise die Linien im jeweiligen Formfaktor mit passender Farbe darstellen. Eine Demo gibt es <a href="/projekte/transportkit">hier</a>.',
    tags: [
      'SASS',
      'Deployment',
    ],
    year: 2019,
    type: 'private',
    customer: {
      title: 'transportkit',
      link: 'https://github.com/schaechinger/transportkit',
    },
    roles: [
      'consulting',
      'dev',
      'proto',
    ],
  },
  {
    title: 'Glühweintour',
    key: 'gluehweintour',
    description: 'Gestaltung einer Plattform zur Organisation von geselligen Glühweintouren in und um München.',
    tags: [
      'Jekyll',
      'SASS',
      'JavaScript',
    ],
    year: 2019,
    type: 'volunteer',
    customer: {
      title: 'Glühweintour',
      link: 'https://www.gluehweintour.de',
    },
    roles: [
      'dev',
      'design',
    ],
  },
  {
    title: 'schaechinger.com',
    key: 'dotcom',
    description: 'Auch diese Webseite musste schließlich entwickelt werden. Seit 2013 über arbeite ich sie regelmäßig und passe sie den Trends und meinem Geschmack an. Seit 2018 basiert sie auf GitHub Pages und damit Jekyll.',
    tags: [
      'Jekyll',
      'SASS',
      'JavaScript',
    ],
    year: 2018,
    type: 'private',
    customer: {
      title: 'schaechinger.github.io',
      link: 'https://github.com/schaechinger/schaechinger.github.io',
    },
    roles: [
      'consulting',
      'dev',
      'proto',
    ],
  },
  {
    title: 'Kundenverwaltungs<span class="lt-sm">-</span>programm',
    key: 'bc',
    description: 'Konzeption und PoC für ein Kundenverwaltungsprogramm für den gesamten Innendienst unter Berücksichtigung bestehender Strukturen und Daten.',
    tags: [
      'PHP',
      'JavaScript',
      'Node.js',
      'React',
    ],
    year: 2017,
    type: 'employee',
    customer: {
      title: 'Fonds Finanz Maklerservice GmbH',
      link: 'https://www.fondsfinanz.de',
    },
    roles: [
      'lead',
      'dev',
      'concept',
    ],
  },
  {
    title: 'Three Circles',
    key: 'three-circles',
    description: 'Einführung eines Kunden-Loyalitäts-Programms zur Steigerung der Kundenbindung (<a href="https://www.three-circles.de">www.three-circles.de</a>). Das Projekt fokussierte sich auf die Anbindung des externen Systems und die Integration in die Systemlandschaft sowie der Verwaltung der Mitglieder durch Mitarbeiter.',
    tags: [
      'PHP',
      'JavaScript',
      'React',
      'Redux',
    ],
    year: 2017,
    type: 'employee',
    customer: {
      title: 'Fonds Finanz Maklerservice GmbH',
      link: 'https://www.fondsfinanz.de',
    },
    roles: [
      'lead',
      'dev',
      'concept',
    ],
  },
  {
    title: 'Dokumentenzuordnung',
    key: 'auto-tool',
    description: 'Automatisierte Zuweisung eingehender Dokumente an interne Verträge sowie Neuanlage von Verträgen sowie Optimierung des Suchalgorithmus zur Erhöhung der Trefferquote.',
    tags: [
      'JavaScript',
      'Ext JS',
      'PHP',
    ],
    year: 2015,
    type: 'employee',
    customer: {
      title: 'Fonds Finanz Maklerservice GmbH',
      link: 'https://www.fondsfinanz.de',
    },
    roles: [
      'dev',
      'concept',
    ],
  },
  {
    title: 'Marken-Relaunch',
    key: 'ff-relaunch',
    description: 'Neuimplementierung der Webseite fondsfinanz.de im Zuge des Marken-Relaunchs.',
    tags: [
      'PHP',
      'SASS',
      'JavaScript',
      'HTML',
    ],
    year: 2015,
    type: 'employee',
    customer: {
      title: 'Fonds Finanz Maklerservice GmbH',
      link: 'https://www.fondsfinanz.de',
    },
    roles: [
      'dev',
    ],
  },
  {
    title: 'feader – read your feads',
    key: 'feader',
    description: 'Ein webbasierter responsive Feedreader, dessen Hauptaugenmerk auf Datenschutz und Benutzerfreundlichkeit liegt.',
    tags: [
      'PHP',
      'JavaScript',
      'C++',
    ],
    year: 2013,
    type: 'private',
    customer: {
      title: 'feader',
      link: 'https://github.com/schaechinger/feader',
    },
    roles: [
      'dev',
    ],
  },
];

export default projects;
