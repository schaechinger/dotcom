import Polyglot from 'node-polyglot';
import { browserHistory } from 'react-router';
import de from './de';
import en from './en';
//import eo from './eo';
//import es from './es';
import langContent from './langContent';

class Language {
  constructor() {
    this.phrases = {
      de: de,
      en: en/*,
      eo: eo,
      es: es*/
    };

    if (navigator.browserLanguage) {
      this.userLang = navigator.browserLanguage;
    }
    else if (navigator.language) {
      this.userLang = navigator.language;
    }
    if (this.userLang) {
      this.userLang = this.userLang.substr(0, 2);
    }

    this.polyglot = new Polyglot({
      allowMissing: true
    });
    this.polyglot.extend(langContent);

    this.setLanguage();
  }

  t(key, placeholder) {
    return this.polyglot.t(key, placeholder);
  }

  locale() {
    return this.currentLang;
  }

  bestMatch() {
    if (this.userLang && -1 !== Object.keys(this.phrases).indexOf(this.userLang)) {
      return this.userLang;
    }
    else {
      return 'en';
    }
  }

  matchesUser() {
    return this.locale() === this.bestMatch();
  }

  isKnown() {
    return !this.unknownLang;
  }

  getAlternates() {
    let self = this;

    let languages = Object.keys(self.phrases);
    let alternates = [];
    let { protocol, host } = window.location;

    languages.forEach((lang) => {
      let link = '/' + lang + self.getPath();
      alternates.push({
        rel: 'alternate',
        hreflang: lang,
        href: protocol + '//' + host + link
      });
    });

    return alternates;
  }

  getPath() {
    return this.absPath;
  }

  setLanguage() {
    let { pathname, search, hash } = window.location;
    pathname = pathname.split('/');
    let currentLang = null;

    if (1 < pathname.length && 2 === pathname[1].length) {
      currentLang = pathname[1];
      this.absPath = window.location.pathname.substr(3);
    }
    else {
      this.absPath = window.location.pathname;
    }
    let index = this.absPath.length - 1;
    if ('/' !== this.absPath[index]) {
      // TODO extend for hash links or parameters
      this.absPath += '/';
    }

    if (currentLang !== this.currentLang) {
      this.unknownLang = !this.phrases[currentLang];

      if (!currentLang) {
        currentLang = this.bestMatch();
        browserHistory.push('/' + currentLang + this.getPath() + search + hash);
      }
      else if (this.unknownLang) {
        currentLang = 'en';
      }

      this.currentLang = currentLang;
      this.polyglot.locale(this.currentLang);
      this.polyglot.extend(this.phrases[currentLang]);
    }
  }
}

export default new Language();
