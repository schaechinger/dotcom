import React from 'react';
import Page from './Page';
import { MailLink } from '../Elements/LinkButton';
import Language from '../Language/Language';

class ImprintPage extends Page {
  render() {
    return (
      <div className="page-imprint">
        <div className="element-block element-block-bottom-only">
          <div className="row">
            <div className="columns small-12">
              <h1>{Language.t('imprint.meta.title')}</h1>
              
              <h2>{Language.t('imprint.owner.title')}</h2>

              <p>Manuel Schächinger</p>

              <p>Jachenauer Str. 17<br/>
              81369 <span dangerouslySetInnerHTML={{__html: Language.t('imprint.owner.city')}} /></p>

              <h3>{Language.t('imprint.owner.contact.title')}</h3>

              <p><MailLink address="manuel" /><br/>
              {Language.t('imprint.owner.contact.phone')}</p>
            </div>
          </div>
        </div>

        <div className="element-block">
          <div className="row">
            <div className="columns small-12">
              <h2>{Language.t('imprint.disclaimer.title')}</h2>

              <h3>{Language.t('imprint.disclaimer.content.title')}</h3>
              
              <p>{Language.t('imprint.disclaimer.content.text.0')}</p>

              <h3>{Language.t('imprint.disclaimer.links.title')}</h3>

              <p>{Language.t('imprint.disclaimer.links.text.0')}</p>

              <h3>{Language.t('imprint.disclaimer.copyright.title')}</h3>

              <p>{Language.t('imprint.disclaimer.copyright.text.0')}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImprintPage;
