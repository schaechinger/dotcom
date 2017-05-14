import React from 'react';
import Page from '../Page';
import Language from '../../Language/Language';
import DateFormatter from '../../Elements/Date';
import HighLight from '../../Elements/HighLight';
import LinkButton from '../../Elements/LinkButton';
import './resume.css';

class ResumePage extends Page {
  render() {
    return (
      <div className="page-resume">
        <div className="row">
          <div className="columns small-12">
            <h1>{Language.t('resume.meta.title')}</h1>
          </div>
          
          <div className="element-block clearfix">
            <div id="experience" className="columns small-12">
              <h2>{Language.t('resume.experience.title')}</h2>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="https://fondsfinanz.de" target="_blank">
                    Fonds Finanz Maklerservice GmbH
                  </a>
                </h3>
                <h4>{Language.t('resume.experience.ff.job')}&nbsp;|&nbsp;
                  {Language.t('resume.since')}&nbsp;
                  <DateFormatter at="2014-06-01" />&nbsp;
                  {Language.t('resume.location', {
                    city: Language.t('resume.experience.ff.city')
                  })}</h4>

                <p className="description">
                  {Language.t('resume.experience.ff.text.0')} <HighLight>JavaScript</HighLight>&nbsp;
                  {Language.t('resume.experience.ff.text.1')} <HighLight>React</HighLight>&nbsp;
                  {Language.t('resume.experience.ff.text.2')} <HighLight>Ext JS</HighLight>
                  {Language.t('resume.experience.ff.text.3')}
                  <br />
                  {Language.t('resume.experience.ff.text.4')} <HighLight>PHP</HighLight>&nbsp;
                  {Language.t('resume.experience.ff.text.5')}
                </p>
              </div>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="http://keksfabrik.tv" target="_blank">
                    Keksfabrik Produktion GbR
                  </a>
                </h3>
                <h4>{Language.t('resume.experience.keks.job')}&nbsp;|&nbsp;
                  <DateFormatter at="2013-04-01" /> -&nbsp;
                  <DateFormatter at="2014-05-01" />&nbsp;
                  {Language.t('resume.location', {
                    city: Language.t('resume.experience.keks.city')
                  })}</h4>

                <p className="description">
                  {Language.t('resume.experience.keks.text.0')}<HighLight>Objective-C</HighLight>
                  {Language.t('resume.experience.keks.text.1')} <HighLight>Java</HighLight>&nbsp;
                  {Language.t('resume.experience.keks.text.2')}
                  <br />
                  {Language.t('resume.experience.keks.text.3')} <HighLight>C++</HighLight>&nbsp;
                  {Language.t('resume.experience.keks.text.4')} <HighLight>PHP</HighLight>&nbsp;
                  {Language.t('resume.experience.keks.text.5')}
                </p>
              </div>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="http://mecomo.com" target="_blank">
                    Mecomo Mobile Apps & Content GmbH
                  </a>
                </h3>
                <h4>{Language.t('resume.experience.mec.job')}&nbsp;|&nbsp;
                  <DateFormatter at="2012-03-01" /> -&nbsp;
                  <DateFormatter at="2013-03-01" />&nbsp;
                  {Language.t('resume.location', {
                    city: Language.t('resume.experience.mec.city')
                  })}</h4>

                <p className="description">
                  {Language.t('resume.experience.mec.text.0')}<HighLight>Objective-C</HighLight>
                  {Language.t('resume.experience.mec.text.1')}
                  <br />
                  {Language.t('resume.experience.mec.text.2')} <HighLight>REST</HighLight>&nbsp;
                  {Language.t('resume.experience.mec.text.3')} <HighLight>C#</HighLight>&nbsp;
                  {Language.t('resume.experience.mec.text.4')}
                </p>
              </div>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="http://parkeroutdoor.com" target="_blank">
                    Parker Outdoor GmbH
                  </a>
                </h3>
                <h4>{Language.t('resume.experience.parker.job')}&nbsp;|&nbsp;
                  <DateFormatter at="2007-06-01" /> -&nbsp;
                  <DateFormatter at="2011-09-01" />&nbsp;
                  {Language.t('resume.location', {
                    city: Language.t('resume.experience.parker.city')
                  })}</h4>

                <p className="description">
                  {Language.t('resume.experience.parker.text.0')}
                </p>
              </div>
            </div>
          </div>

          <div className="element-block clearfix">
            <div id="education" className="columns small-12">
              <h2>{Language.t('resume.education.title')}</h2>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="http://cs.hm.edu" target="_blank">
                    {Language.t('resume.education.cs.college')}  
                  </a>
                </h3>
                <h4>{Language.t('resume.education.cs.title')}&nbsp;|&nbsp;
                  <DateFormatter at="2009-10-01" /> -&nbsp;
                  <DateFormatter at="2014-02-01" /></h4>

                <p className="description">
                  {Language.t('resume.education.cs.text.0')}
                </p>
              </div>
            </div>

            <div className="resume-element">
              <div className="columns small-12 medium-9">
                <h3>
                  <a href="http://cs.hm.edu" target="_blank">
                    {Language.t('resume.education.thesis.college')}  
                  </a>
                </h3>
                <h4>{Language.t('resume.education.thesis.title')}&nbsp;|&nbsp;
                  <DateFormatter at="2013-11-01" /> -&nbsp;
                  <DateFormatter at="2014-02-01" /></h4>

                <p className="description">
                  {Language.t('resume.education.thesis.text.0')}<br />
                  {Language.t('resume.education.thesis.text.1')}
                </p>

                <LinkButton link="/projects/feader">
                  {Language.t('global.projectLink')}</LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="element-block highlight-block">
          <div className="row">
            <div className="columns small-12 medium-10 medium-offset-1">
              <h3>
                <i className="glyphicons glyphicons-suitcase" />
                {Language.t('resume.highlight.title')}
              </h3>

              <p>{Language.t('resume.highlight.text.0')}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="element-block clearfix">
            <div id="skills" className="columns small-12">
              <h2>{Language.t('resume.skills.title')}</h2>
            </div>
            <div className="clearfix">
              <div className="columns small-12 medium-6">
                <h3>{Language.t('resume.skills.programming.title')}</h3>
                
                <ul className="listing">
                  <li><HighLight>C/C++</HighLight></li>
                  <li>C#</li>
                  <li><HighLight>CSS</HighLight></li>
                  <li>HTML</li>
                  <li>Java</li>
                  <li><HighLight>JavaScript</HighLight></li>
                  <li>Objective-C</li>
                  <li>PHP</li>
                  <li>SQL</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div className="columns small-12 medium-6">
                <h3>{Language.t('resume.skills.libs.title')}</h3>

                <ul className="listing">
                  <li><HighLight>AngularJS</HighLight></li>
                  <li>Boost</li>
                  <li>Bootstrap</li>
                  <li>Cordova</li>
                  <li>Enzyme</li>
                  <li>Express.js</li>
                  <li>Ext JS</li>
                  <li>Foundation</li>
                  <li>Gulp</li>
                  <li>Jasmine</li>
                  <li>jQuery</li>
                  <li>Karma</li>
                  <li>Material UI</li>
                  <li><HighLight>Node.js</HighLight></li>
                  <li><HighLight>React</HighLight></li>
                  <li>Redux</li>
                  <li>Webpack</li>
                  <li>Zend Framework</li>
                </ul>
              </div>
            </div>

            <div className="clearfix">
              <div className="columns small-12 medium-6">
                <h3>{Language.t('resume.skills.db.title')}</h3>
                
                <ul className="listing">
                  <li><HighLight>CouchDb</HighLight></li>
                  <li>MongoDB</li>
                  <li><HighLight>MySQL</HighLight></li>
                  <li>Oracle DB</li>
                </ul>
              </div>

              <div className="columns small-12 medium-6">
                <h3>{Language.t('resume.skills.others.title')}</h3>
                
                <ul className="listing">
                  <li>Confluence</li>
                  <li>Elastic Search</li>
                  <li><HighLight>Git</HighLight></li>
                  <li>Jira</li>
                  <li>nginx</li>
                  <li>npm</li>
                  <li>{Language.t('resume.skills.others.pm')}</li>
                  <li>Scrum</li>
                  <li>UML</li>
                  <li><HighLight>Unix/Linux</HighLight></li>
                  <li>WebSockets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResumePage;
