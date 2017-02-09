import React, { Component } from 'react';
import Link from './Link';
import Language from '../Language/Language';
import './link-button.css';

class LinkButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    window.location = this.mail;
  }

  generateButton(config) {
    let icon = config.icon ? <i className={'glyphicons glyphicons-' + config.icon} /> : null;
    let className = 'link-button ' + (config.primary ? 'primary' : 'secondary');
    let button = <span>
        {icon}
        {config.text}
      </span>;

    if (config.link.match(/:\/\//)) {
      button = <a href={config.link} target="_blank" className={className}>
        {button}
      </a>;
    }
    else if ('mailto:' === config.link.substr(0, 7)) {
      this.mail = config.link;
      button = <a className={className} onClick={this.onClick}>
        {button}
      </a>;
    }
    else {
      button = <Link to={config.link} className={className}>{button}</Link>;
    }

    return button;
  }

  render() {
    let props = Object.assign({}, this.props);
    props.text = props.text || props.children;
    return this.generateButton(props);
  }
}

class MailButton extends LinkButton {
  generateMailConfig() {
    let domain = window.location.hostname;
    domain = domain.split('.')
      .splice(-2)
      .join('.');

    return {
      link: 'mailto:' + this.props.address + '\u0040' + domain,
      text: Language.t('global.sendMail')
    };
  }

  render() {
    let config = this.generateMailConfig();

    return this.generateButton(config);
  }
}

class MailLink extends MailButton {
  render() {
    let config = this.generateMailConfig();
    
    this.mail = config.link;
    delete config.link;
    config.onClick = this.onClick;
    
    let content = this.props.children || config.text;
    delete config.text;

    if (this.props.title) {
      config.title = this.props.title;
    }
    if (this.props.className) {
      config.className = this.props.className;
    }

    return (
      <a {...config}>{content}</a>
    );
  }
}

export {
  LinkButton as default,
  MailButton,
  MailLink
};
