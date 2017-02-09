import React from 'react';
import Page from './Page';
import Link from '../Elements/Link';
import { MailLink } from '../Elements/LinkButton';
import Language from '../Language/Language';
import HighLight from '../Elements/HighLight';
import './contact.css';

class ContactPage extends Page {
  render() {
    let socialLinks = [
      <Link to="https://schchn.gr/in" key="linkedin">
        Linked<i className="social social-linked-in" />
      </Link>
    ];
    socialLinks.splice(
      ('de' === Language.locale()) ? 0 : 1,
      0,
      <Link to="https://schchn.gr/x" key="xing">Xing</Link>
    );

    return (
      <div className="row">
        <div className="page-contact">
          <div className="columns small-12">
            <h1>{Language.t('contact.meta.title')}</h1>

            <h2>{Language.t('contact.subline')}</h2>
          </div>

          <div className="element-block clearfix">
            <div className="columns small-12 medium-10 medium-offset-1 large-8 large-offset-2 end">
              <div className="card clearfix">
                <div className="columns small-12 medium-4 image">
                  <span className="m">M</span>
                </div>
                <div className="columns small-12 medium-8 content">
                  <p>
                    <span className="name">Manuel Schächinger</span><br />
                    {Language.t('home.job')}
                  </p>
                  <p>
                    <MailLink address="manuel" /><br />
                    <Link to="/">schaechinger.com</Link><br />
                    <span className="social-links">{socialLinks}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage;
