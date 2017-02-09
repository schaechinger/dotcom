import React from 'react';
import Page from './Page';
import Language from '../Language/Language';
import LinkButton, { MailButton } from '../Elements/LinkButton';

class PageNotFound extends Page {
  render() {
    return (
      <div className="row">
        <div className="columns small-12 page-404">
          <h1>{Language.t('notFound.meta.title')}</h1>

          <h2>{Language.t('notFound.subline')}</h2>

          <p>{Language.t('notFound.text.0')}</p>

          <LinkButton text={Language.t('notFound.home')} link="/" />
        </div>
      </div>
    )
  }
}

export default PageNotFound;
