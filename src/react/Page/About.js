import React from 'react';
import Page from './Page';
import HighLight from '../Elements/HighLight';
import Link from '../Elements/Link';
import Language from '../Language/Language';
import './about.css';

class AboutPage extends Page {
  calcAge() {
    let today = new Date();
    let birthDate = new Date(1991, 1, 14);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
  }

  calcDays() {
    let date = new Date();
    let first = new Date(date.getFullYear(), 0, 0);
    let diff = date - first;
    
    return Math.floor(diff / 86400000);
  }

  render() {
    let days = this.calcDays();

    return (
      <div className="page-about">
        <div className="element-block">
          <div className="row">
            <div className="columns small-12">
              <div className="center">
                <img src="/img/schaechinger.jpg" className="me" />
              </div>

              <h1>{Language.t('about.title')}</h1>

              <p>
                {Language.t('about.text.0')}
                <HighLight>{this.calcAge()}</HighLight>
                {Language.t('about.text.1')}
                <HighLight>{Language.t('about.text.2')}</HighLight>
                {Language.t('about.text.3')}
                <HighLight>JavaScript</HighLight>
                {Language.t('about.text.4')}
                <HighLight>React</HighLight>
                {Language.t('about.text.5')}
                <HighLight>{Language.t('about.text.6')}</HighLight>
                {Language.t('about.text.7')}
                <HighLight>JavaScript</HighLight>
                {Language.t('about.text.8')}
              </p>
              <p>{Language.t('about.text.9')}</p>
              <p>{Language.t('about.text.10')}</p>
            </div>
          </div>
        </div>

        <div className="element-block highlight-block">
          <div className="row">
            <div className="clearfix">
              <div className="columns small-12 medium-10 medium-offset-1">
                <h3>
                  <i className="glyphicons glyphicons-charts" />
                    {Language.t('about.numbers.title')}
                </h3>

                <div className="stats">
                  <div className="columns small-4">
                    <p>
                      <span>
                        <i className="glyphicons glyphicons-veteran" /> 0
                      </span>
                      {Language.t('about.numbers.sections.0')}
                    </p>
                  </div>
                  <div className="columns small-4">
                    <p>
                      <span>
                        <i className="glyphicons glyphicons-person-running" />
                        {Math.floor(days * 0.43)}
                      </span>
                      {Language.t('about.numbers.sections.1')}
                    </p>
                  </div>
                  <div className="columns small-4">
                    <p>
                      <span>
                        <i className="glyphicons glyphicons-coffee-cup" />
                        {Math.floor(days * 2.15)}
                      </span>
                      {Language.t('about.numbers.sections.2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="element-block">
          <div className="row">
            <div className="columns small-12">
              <h2>jsguys</h2>

              <p>
                {Language.t('about.jsguys.text.0')}
                jsguys
                {Language.t('about.jsguys.text.1')}
                <Link to="http://www.maikpaulus.com">Maik Paulus</Link>
                {Language.t('about.jsguys.text.2')}
                <Link to="https://twitter.com/jsguysnet">Twitter</Link>
                {Language.t('about.jsguys.text.3')}
                <Link to="http://www.jsguys.net/blog">
                  {Language.t('about.jsguys.text.4')}
                </Link>
                {Language.t('about.jsguys.text.5')}
                <Link to="https://github.com/jsguysnet">GitHub</Link>
                {Language.t('about.jsguys.text.6')}
              </p>
              
              <p>
                {Language.t('about.jsguys.text.7')}
                <Link to="http://www.jsguys.net">jsguys.net</Link>!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage;
