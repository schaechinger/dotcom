import React, { Component } from 'react';
import Language from '../Language/Language';
import Link from '../Elements/Link';
import Socials from './Socials';
import { MailButton } from '../Elements/LinkButton';
import './footer.css';

class Footer extends Component {
  render() {
    let globeClass = 'glyphicons glyphicons-globe';
    if ('de' === Language.locale()) {
      globeClass += '-af';
    }

    return (
      <footer className="footer" role="detailinfo">
        <div className="row">
          <i className="glyphicons glyphicons-scissors-alt" />

          <div className="social-bar clearfix">
            <div className="columns small-12 medium-8 medium-offset-2 end hide-for-large-up">
              <Socials />
            </div>
          </div>

          <div className="language-select clearfix">
            <div className="columns small-12 medium-8 medium-offset-4 large-7 end">
              <i className={globeClass} />
              <ul>
                <li><Link lang="de">{Language.t('lang.de.name')}</Link></li>
                <li><Link lang="en">{Language.t('lang.en.name')}</Link></li>
              </ul>
            </div>
          </div>
        
          <div className="link-section clearfix">
            <div className="columns small-12 medium-2 medium-offset-2">
              <ul className="links">
                <li><Link to="/imprint">{Language.t('footer.imprint')}</Link></li>
                <li><Link to="/privacy">{Language.t('footer.privacy')}</Link></li>
                <li><Link to="/contact">{Language.t('footer.contact')}</Link></li>
              </ul>
            </div>
            <div className="columns small-12 medium-6 end">
              <p>{Language.t('footer.text')}</p>
              
              <p>&copy; {new Date().getFullYear()} Manuel Schächinger.&nbsp;
              {Language.t('footer.rightsReserved')}</p>
              
              <p className="mwl">{Language.t('footer.mwl.0')}&nbsp;
                <i className="glyphicons glyphicons-heart-empty" />&nbsp;
                {Language.t('footer.mwl.1')}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
