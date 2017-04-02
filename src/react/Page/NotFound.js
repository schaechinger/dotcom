import React from 'react';
import Page from './Page';
import Language from '../Language/Language';
import LinkButton, { MailButton } from '../Elements/LinkButton';
import './not-found.css';

class PageNotFound extends Page {
  render() {
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // TODO: set noindex meta tag

    let buttons = <LinkButton link="/">{Language.t('notFound.home')}</LinkButton>;
    let customText = Language.t('notFound.text.1');

    if (!Language.isKnown()) {
      buttons = (
        <ul className="lang-button-list">
          <li>
            <LinkButton lang="de">{Language.t('lang.de.name')}</LinkButton>
          </li>
          <li>
            <LinkButton lang="en">{Language.t('lang.en.name')}</LinkButton>
          </li>
        </ul>
      );
      customText = Language.t('lang.unknown.text.0');
    }

    return (
      <div className="page-404 no-page-padding" style={{height}}>
        <div className="row">
          <div className="columns small-12 ">
            <div className="marker">
              <h1>{Language.t('notFound.meta.title')}</h1>
              <div className="triangle" />

              <i className="glyphicons glyphicons-map-marker" />
            </div>

            <i className="glyphicons glyphicons-boat" />

            <p>
              {Language.t('notFound.text.0')}
              <br className="hide-for-small" />
              {customText}
            </p>
            {buttons}
          </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound;
