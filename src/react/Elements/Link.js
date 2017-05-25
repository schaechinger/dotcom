import React, { Component } from 'react';
import { Link } from 'react-router';
import Language from '../Language/Language';

class LanguageLink extends Component {
  processProps() {
    let props = Object.assign({}, this.props);
    let lang = props.lang;
    if (!props.to || !(props.to.match(/^https?:\/\//) || props.to.match(/^mailto:/))) {
      let { pathname } = window.location;
      pathname = pathname.split('/');

      if (lang) {
        props.to = Language.getPath();
      }

      if (undefined === lang && 1 < pathname.length && 2 === pathname[1].length) {
        lang = pathname[1];
      }

      if (lang) {
        props.to = '/' + lang + props.to;
      }

      if ('/' !== props.to[props.to.length - 1]) {
        // TODO extend for hash links or parameters
        props.to += '/';
      }

      props.to = props.to || '/';
    }
    else {
      props.target = '_blank';
    }

    return props;
  }

  render() {
    let props = this.processProps();

    return <Link {...props} />;
  }
}

export default LanguageLink;
