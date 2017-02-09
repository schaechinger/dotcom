import React, { Component } from 'react';
import Language from '../Language/Language';
import { MailLink } from '../Elements/LinkButton';
import './socials.css';

class Socials extends Component {
  render() {
    let links = [
      <li key="linkedin">
        <a
          href="https://schchn.gr/in"
          target="_blank"
          title="LinkedIn"
          className="linkedin"
        >
          <i className="social social-linked-in" />
          <span>LinkedIn</span>
        </a>
      </li>,
      <li key="github">
        <a
          href="https://schchn.gr/gh"
          target="_blank"
          title="GitHub"
          className="github"
        >
          <i className="social social-github" />
          <span>GitHub</span>
        </a>
      </li>,
      <li key="instagram">
        <a
          href="https://schchn.gr/ig"
          target="_blank"
          title="Instagram"
          className="instagram no-invert"
        >
          <i className="social social-instagram" />
          <span>Instagram</span>
        </a>
      </li>,
      <li key="twitter">
        <a
          href="https://schchn.gr/t"
          target="_blank"
          title="Twitter"
          className="twitter"
        >
          <i className="social social-twitter" />
          <span>Twitter</span>
        </a>
      </li>,
      <li key="mail">
        <MailLink
          address="manuel"
          title={Language.t('socials.mail')}
          className="email"
        >
          <i className="social social-e-mail" />
          <span>E-Mail</span>
        </MailLink>
      </li>
    ];

    links.splice(
      ('de' === Language.locale()) ? 0 : 1,
      0,
      <li key="xing">
        <a
          href="https://schchn.gr/x"
          target="_blank"
          title="Xing"
          className="xing"
        >
          <i className="social social-xing" />
          <span>Xing</span>
        </a>
      </li>
    );

    return (
      <ul className={'socials' + (this.props.invert ? ' invert' : '')}>
        {links}
      </ul>
    )
  }
}

export default Socials;
