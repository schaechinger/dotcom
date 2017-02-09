import React from 'react';
import Page from './Page';
import Language from '../Language/Language';

class PrivacyPage extends Page {
  render() {
    return (
      <div className="page-privacy">
        <div className="element-block element-block-bottom-only">
          <div className="row">
            <div className="columns small-12">
              <h1>{Language.t('privacy.meta.title')}</h1>
              
              <h2>{Language.t('privacy.ga.title')}</h2>

              <p>{Language.t('privacy.ga.text.0')}</p>
              <p>{Language.t('privacy.ga.text.1')}</p>
              <p>{Language.t('privacy.ga.text.2')}</p>
              <p>{Language.t('privacy.ga.text.3')} <a
                href={'http://tools.google.com/dlpage/gaoptout?hl=' +
                Language.locale()} target="_blank">tools.google.com/dlpage/gaoptout</a>
              </p>
              <p dangerouslySetInnerHTML={{__html: Language.t('privacy.ga.text.4')}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PrivacyPage;
