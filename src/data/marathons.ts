import { MarathonData } from 'stores/marathon';

const marathons: MarathonData[] = [
  {
    event: {
      name: 'Berlin Marathon',
      location: {
        city: 'Berlin',
        country: 'DEU',
        latitude: 52.516023465253085,
        longitude: 13.37315760792279,
      },
    },
    edition: {
      name: 'BMW Berlin Marathon',
      date: new Date('2017-09-24'),
      number: 44,
      participants: 0,
    },
    bib: '37753',
    time: 13690,
    rank: 10808,
    link: 'https://www.medalmonday.de/teilnahmen/ca7a9aaa-2022-4a90-97e3-b400c711f8d1',
  },
  {
    event: {
      name: 'Hamburg Marathon',
      location: {
        city: 'Hamburg',
        country: 'DEU',
        latitude: 53.56124078277369,
        longitude: 9.975716212589502,
      },
    },
    edition: {
      name: 'Haspa Hamburg Marathon',
      date: new Date('2018-04-29'),
      number: 33,
      participants: 0,
    },
    bib: '8286',
    time: 13960,
    rank: 3408,
    link: 'https://www.medalmonday.de/teilnahmen/2a11278f-c566-4fac-a77f-2925fbedfb45',
  },
  {
    event: {
      name: 'Chicago Marathon',
      location: {
        city: 'Chicago, IL',
        country: 'USA',
        latitude: 41.87111283635178,
        longitude: -87.62057675626873,
      },
    },
    edition: {
      name: 'Bank of America Chicago Marathon',
      date: new Date('2018-10-07'),
      number: 41,
      participants: 0,
    },
    bib: '16381',
    time: 12991,
    rank: 7289,
    link: 'https://www.medalmonday.de/teilnahmen/50986b79-69d9-4c77-9ed2-d44cef09162f',
  },
  {
    event: {
      name: 'Frankfurt Marathon',
      location: {
        city: 'Frankfurt',
        country: 'DEU',
        latitude: 50.11195912495419,
        longitude: 8.6508425118249,
      },
    },
    edition: {
      name: 'Mainova Frankfurt Marathon',
      date: new Date('2018-10-28'),
      number: 37,
      participants: 0,
    },
    bib: '4803',
    time: 13281,
    rank: 4344,
    link: 'https://www.medalmonday.de/teilnahmen/eeb00c72-fac3-4bca-88f9-8f678d1d41ec',
  },
  {
    event: {
      name: 'New York City Marathon',
      location: {
        city: 'New York City, NY',
        country: 'USA',
        latitude: 40.771222473148526,
        longitude: -73.97785328877373,
      },
    },
    edition: {
      name: 'TCS New York City Marathon',
      date: new Date('2019-11-03'),
      number: 49,
      participants: 0,
    },
    bib: '24029',
    time: 13616,
    rank: 12211,
    link: 'https://www.medalmonday.de/teilnahmen/a9342503-d366-4044-8bde-0a0e549892a3',
  },
  {
    event: {
      name: 'Berlin Marathon',
      location: {
        city: 'Berlin',
        country: 'DEU',
        latitude: 52.516023465253085,
        longitude: 13.37315760792279,
      },
    },
    edition: {
      name: 'BMW Berlin Marathon',
      date: new Date('2019-09-29'),
      number: 46,
      participants: 0,
    },
    bib: '35477',
    time: 12448,
    rank: 7163,
    link: 'https://www.medalmonday.de/teilnahmen/04c5590d-1352-4fa2-90d7-fbd0d6d89395',
  },
  {
    event: {
      name: 'London Marathon',
      location: {
        city: 'London',
        country: 'GBR',
        latitude: 51.50267756290276,
        longitude: -0.13859724826904724,
      },
    },
    edition: {
      name: 'Virgin Money London Marathon',
      date: new Date('2021-10-03'),
      number: 41,
      participants: 0,
    },
    bib: '52877',
    time: 15191,
    rank: 15457,
    link: 'https://www.medalmonday.de/teilnahmen/10dc30da-da20-45d2-a117-1b0a052c2efa',
  },
  {
    event: {
      name: 'Tokyo Marathon',
      location: {
        city: 'Tokyo',
        country: 'JPN',
        latitude: 35.68254120028186,
        longitude: 139.76076886707216,
      },
    },
    edition: {
      name: 'Tokyo Marathon',
      date: new Date('2023-03-05'),
      number: 16,
      participants: 0,
    },
    bib: '36362',
    time: 14634,
    rank: 13484,
    link: 'https://www.medalmonday.de/teilnahmen/04593887-01a4-4b35-b102-7d798904726d',
  },
];

export default marathons;
