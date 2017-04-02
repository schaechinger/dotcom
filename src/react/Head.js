import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Language from './Language/Language';

class Head extends Component {
  constructor(props) {
    super(props);

    this.init();

    this.shorthands = {
      twitter: 'name',
      og: 'property',
      article: 'property'
    };

    this.forceState = false;
    this.state = {};
  }

  init() {
    let self = this;

    if (!window.updateHelmet) {
      window.updateHelmet = (state) => {
        self.updateState(state);
      };
    }
  }

  updateState(state) {
    this.forceState = true;
    this.setState(state);
  }

  render() {
    let state = {};

    if (this.forceState) {
      state = this.state;
      this.forceState = false;
    }

    let { protocol, host, pathname } = window.location;

    let langRoot = Language.getPath();
    langRoot = langRoot.substr(1);
    langRoot = langRoot.replace('/', '.');
    langRoot = langRoot || 'home';
    if ('.' !== langRoot[langRoot.length - 1]) {
      langRoot += '.';
    }
    langRoot += 'meta.';

    let link = Language.getAlternates();
    let meta = [];

    // title
    let title = state.title || Language.t(`${langRoot}title`);
    let titleTemplate = 'Manuel Schächinger';
    if (!title || `${langRoot}title`  === title) {
      title = titleTemplate + '';
      titleTemplate = null;
    }
    else {
      titleTemplate =`%s – ${titleTemplate}`;
    }

    // description
    let description = state.description || Language.t(`${langRoot}description`);
    if (`${langRoot}description` === description) {
      description = Language.t('meta.description');
    }
    meta.push({
      name: 'description',
      content: description
    });

    // twitter card, open graph
    let socialTitle = (titleTemplate ? title + ' – ' : '') + 'Manuel Schächinger';
    meta.push(
      {
        name: 'twitter:title',
        content: socialTitle
      },
      {
        name: 'twitter:description',
        content: description
      },
      {
        property: 'og:title',
        content: socialTitle
      },
      {
        property: 'og:url',
        content: protocol + '//' + host + pathname
      }
    );

    for (let shorthand in this.shorthands) {
      if (this.shorthands.hasOwnProperty(shorthand) && this.state[shorthand]) {
        const data = this.state[shorthand];

        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            let values = data[key];
            if (!(values instanceof Array)) {
              values = [values];
            }

            values.forEach((value) => {
              meta.push({
                [this.shorthands[shorthand]]: `${shorthand}:${key}`,
                content: value
              });
            });
          }
        }
      }
    }

    let props = {
      htmlAttributes: {
        lang: Language.locale()
      },
      base: {href: `${protocol}//${host}`},
      title: title,
      titleTemplate: titleTemplate,
      link: link,
      meta: meta
    };

    return (
       <Helmet {...props} />
    );
  }
}

export default Head;
