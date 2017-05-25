import React from 'react';
import Projects from '../';
import Language from '../../../Language/Language';
import HighLight from '../../../Elements/HighLight';
import Link from '../../../Elements/Link';
import LinkButton from '../../../Elements/LinkButton';
import './overview.css';

export default () => (
  <div className="page-projects-overview">
    <div className="columns small-12">
      <h1>{Language.t('projects.meta.title')}</h1>
    </div>
    
    <div className="element-block clearfix">
      <div className="columns small-12">
        <h2>{Language.t('projects.own.title')}</h2>
      </div>

      <div className="columns small-12 medium-6 project-summary">
        <h3>
          Housemaid
          <Link to="https://github.com/schaechinger/housemaid"
            className="github"
            title={Language.t('global.githubLink')}
          >
            <i className="social social-github" />
          </Link>
        </h3>
        <p>
          {Language.t('projects.own.housemaid.text.0')}&nbsp;
          <HighLight>Node.js</HighLight>&nbsp;
          {Language.t('projects.own.housemaid.text.1')}
        </p>
        <LinkButton link="/projects/housemaid">
          {Language.t('global.moreInformation')}
        </LinkButton>
      </div>

      <div className="columns small-12 medium-6 project-summary">
        <h3>
          feader - read your feads
          <Link to="https://github.com/schaechinger/feader"
            className="github"
            title={Language.t('global.githubLink')}
          >
            <i className="social social-github" />
          </Link>
        </h3>
        <p>{Language.t('projects.own.feader.text.0')}</p>
        <LinkButton link="/projects/feader">
          {Language.t('global.moreInformation')}
        </LinkButton>
      </div>
    </div>
    
    <div className="element-block clearfix">
      <div className="columns small-12">
        <h2>jsguys</h2>

        <p>{Language.t('projects.jsguys.text.0')}</p>

        <LinkButton link="http://www.jsguys.net">
          {Language.t('projects.jsguys.link')}
        </LinkButton>
      </div>

      <div className="columns small-12 medium-6 project-summary">
        <h3>
          Beerific
          <Link to="https://github.com/jsguysnet/beerific"
            className="github"
            title={Language.t('global.githubLink')}
          >
            <i className="social social-github" />
          </Link>
        </h3>
        <p>
          {Language.t('projects.jsguys.beerific.text.0')}&nbsp;
          <HighLight>Cordova</HighLight>&nbsp;
          {Language.t('projects.jsguys.beerific.text.1')}
        </p>
      </div>

      <div className="columns small-12 medium-6 project-summary">
        <h3>
          Presentation
          <Link to="https://github.com/jsguysnet/presentation"
            className="github"
            title={Language.t('global.githubLink')}
          >
            <i className="social social-github" />
          </Link>
        </h3>
        <p>
          {Language.t('projects.jsguys.presentation.text.0')}&nbsp;
          <HighLight>JavaScript</HighLight>&nbsp;
          {Language.t('projects.jsguys.presentation.text.1')}&nbsp;
          <HighLight>{Language.t('projects.jsguys.presentation.text.2')}</HighLight>&nbsp;
          {Language.t('projects.jsguys.presentation.text.3')}
        </p>
      </div>
    </div>

    <div className="element-block clearfix">
      <div className="columns small-12">
        <h2>Die Verlagsprofis</h2>
      
        <div className="project-summary">
          <p>{Language.t('projects.verlagsprofis.text.0')}</p>
          <LinkButton link="http://www.die-verlagsprofis.de">
            {Language.t('projects.verlagsprofis.link')}
          </LinkButton>
        </div>
      </div>
    </div>

    <div className="element-block clearfix">
      <div className="columns small-12">
        <h2>{Language.t('projects.more.title')}</h2>
        
        <p>
          {Language.t('projects.more.text.0')}<br />
          {Language.t('projects.more.text.1')}&nbsp;
          <Link to="https://github.com/schaechinger">GitHub</Link>&nbsp;
          {Language.t('projects.more.text.2')}
        </p>
      </div>
    </div>
  </div>
);
