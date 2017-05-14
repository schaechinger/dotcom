const TITLE_SUFFIX = 'Manuel Schächinger';

class MetaBuilder {
  constructor() {
    this.meta = [];

    this.shorthands = {
      twitter: 'name',
      og: 'property',
      article: 'property'
    };
  }

  init(title = null, description = null, image = null, pathname = '') {
    const socialTitle = (title ? `${title} – ` : '') + TITLE_SUFFIX;

    let origin = 'https://www.schaechinger.com';
    if ('undefined' !== typeof window) {
      pathname = pathname || window.location.pathname;
      origin = window.location.origin;
    }
    else {
      const config = require('../../../config/');
      origin = config.host;
    }

    // TODO: default description?
    image = image || `${origin}/img/schaechinger.jpg`;

    this.meta = [
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:site',
        content: '@theschaechinger'
      },
      {
        name: 'twitter:creator',
        content: '@theschaechinger'
      },
      {
        name: 'twitter:title',
        content: socialTitle
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: image
      },
      {
        property: 'og:title',
        content: socialTitle
      },
      {
        property: 'og:url',
        content: origin + pathname
      }
    ];

    if (description) {
      this.meta.push(
        {
          name: 'description',
          content: description
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          property: 'og:description',
          content: description
        }
      );
    }
  }

  updateMeta(updates) {
    for (let shorthand in this.shorthands) {
      if (this.shorthands.hasOwnProperty(shorthand) && updates[shorthand]) {
        const data = updates[shorthand];

        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            let values = data[key];
            if (!(values instanceof Array)) {
              values = [values];
            }

            const shortcutKey = this.shorthands[shorthand],
              shortcutValue = `${shorthand}:${key}`;

            for (let m in this.meta) {
              if (this.meta.hasOwnProperty(m)) {
                let metaObject = this.meta[m];
                if (metaObject[shortcutKey] && shortcutValue === metaObject[shortcutKey]) {
                  delete this.meta[m];
                }
              }
            }

            values.forEach((value) => {
              if (value) {
                this.meta.push({
                  [shortcutKey]: shortcutValue,
                  content: value
                });
              }
            });
          }
        }
      }
    }

    if ('undefined' !== typeof window) {
      window.updateHelmet(metadata);
    }
  }

  getMeta() {
    return this.meta;
  }
}

module.exports = MetaBuilder;
