import Polyglot from 'node-polyglot';
import de from './de';
import en from './en';
//import eo from './eo';
//import es from './es';

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

  getAlternates() {
    let self = this;

    let languages = Object.keys(self.phrases);
    let alternates = [];
    let { protocol, host } = window.location;

    languages.forEach((lang) => {
      let link = self.getPath();
      if ('en' !== lang) {
        link = '/' + lang + link;
      }
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
    let { pathname } = window.location;
    pathname = pathname.split('/');
    let currentLang = 'en';

    if (1 < pathname.length && 2 === pathname[1].length) {
      currentLang = pathname[1];
      this.absPath = window.location.pathname.substr(3);
    }
    else {
      this.absPath = window.location.pathname;
    }
    let index = this.absPath.length - 1;
    if ('/' === this.absPath[index]) {
      // TODO extend for hash links or parameters
      this.absPath = this.absPath.substr(0, index);
    }

    if (currentLang !== this.currentLang) {
      if (!this.phrases[currentLang]) {
        currentLang = 'en';
      }
      this.currentLang = currentLang;
      this.polyglot.locale(this.currentLang);
      this.polyglot.extend(this.phrases[currentLang]);
    }
  }
}

export default new Language();
