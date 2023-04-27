import { defineStore } from 'pinia';
import marathons from 'src/data/marathons';

export interface EventData {
  name: string;
  location: {
    city: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
}

export interface Edition {
  name: string;
  number?: number;
  year?: number;
  date?: Date;
  participants?: number;
  bibStyleOptions?: unknown;
}

export interface MarathonData {
  event: EventData;
  edition?: Edition;
  bib?: string;
  time: number;
  rank?: {
    total?: number;
    gender?: number;
    agegroup?: number;
  } | number;
  link?: string;
}

export class Marathon implements MarathonData {
  public event: EventData;

  public edition?: Edition;

  public bib?: string;

  public time: number;

  public rank?: {
    total?: number;
    gender?: number;
    agegroup?: number;
  } | number;

  public link?: string;

  constructor(marathon: MarathonData = {} as MarathonData) {
    this.event = marathon.event;
    this.edition = marathon.edition;
    this.bib = marathon.bib;
    this.time = marathon.time;
    this.rank = marathon.rank;
    this.link = marathon.link;
  }

  public getYear(): string {
    if (this.edition?.year) {
      return `${this.edition.year || ''}`;
    }

    return `${this.edition?.date?.getFullYear() || ''}`;
  }

  public getNumber(): string {
    const number = `${this.edition?.number || ''}`;
    let extension = '';

    if (number) {
      extension = '.';
      // if ('de-DE' !== localeRouter.getLocale()) {
      //   extension = `${['th', 'st', 'nd', 'rd'][+number % 10] || 'th'}`;
      //   if (html) {
      //     extension = `<sup>${extension}</sup>`;
      //   }
      // }
    }

    return `${number}${extension}`;
  }

  public getName(): string {
    const number = this.getNumber();

    const name = this.edition?.name || this.event?.name;

    if (name) {
      return [
        number,
        name,
        this.getYear(),
      ].filter((a) => !!a).join(' ');
    }

    return '';
  }
}

interface State {
  marathons: Marathon[];
  loading: boolean;
}

export const useMarathonStore = defineStore('marathon', {
  state: (): State => ({
    marathons: [],
    loading: false,
  }),
  getters: {
    coordinates: (store) => {
      const coords = store.marathons
        .map((m) => ({ lat: m.event.location.latitude, lng: m.event.location.longitude }))
        .filter((m) => m.lat && m.lng);

      return coords.filter(
        (m, i) => i === coords.findIndex((c) => c.lat === m.lat && c.lng === m.lng),
      ) as { lat: number; lng: number }[];
    },
    majors: (store) => (
      [
        'Tokyo Marathon',
        'Boston Marathon',
        'London Marathon',
        'Berlin Marathon',
        'Chicago Marathon',
        'New York City Marathon',
      ].map((name) => (
        store.marathons.filter((m) => m.event.name === name).sort((a, b) => (
          a.time <= b.time ? -1 : 1
        ))[0] || new Marathon({ event: { name } } as Marathon)
      ))
    ),
  },
  actions: {
    loadList() {
      this.loading = true;
      this.marathons = marathons.map((m) => new Marathon(m)).reverse();
      this.loading = false;

      return Promise.resolve();
    },
  },
});
