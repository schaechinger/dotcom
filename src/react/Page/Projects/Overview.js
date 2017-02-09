import React from 'react';
import { Link } from 'react-router';
import Projects from '../Projects';
import Language from '../../Language/Language';
import HighLight from '../../Elements/HighLight';
import LinkButton from '../../Elements/LinkButton';

class ProjectOverviewPage extends Projects {
  render() {
    return (
        <div className="columns small-12 medium-9 page-projects-overview">
          <h1>{Language.t('projects.meta.title')}</h1>
          
          <div className="element-block clearfix">
            <h2>{Language.t('projects.own.title')}</h2>

            <div className="project-summary">
              <h3>Housemaid</h3>
              <p>
                {Language.t('projects.own.housemaid.text.0')}&nbsp;
                <HighLight>Node.js</HighLight>&nbsp;
                {Language.t('projects.own.housemaid.text.1')}
              </p>
              <LinkButton link="/projects/housemaid">
                {Language.t('global.moreInformation')}
              </LinkButton>
            </div>

            <div className="project-summary">
              <h3>feader - read your feads</h3>
              <p>{Language.t('projects.own.feader.text.0')}</p>
              <LinkButton link="/projects/feader">
                {Language.t('global.moreInformation')}
              </LinkButton>
            </div>
          </div>
          
          <div className="element-block clearfix">
            <h2>{Language.t('projects.jsguys.title')}</h2>

            <div className="project-summary">
              <h3>Beerific</h3>
              <p>
                {Language.t('projects.jsguys.beerific.text.0')}&nbsp;
                <HighLight>Cordova</HighLight>&nbsp;
                {Language.t('projects.jsguys.beerific.text.1')}
              </p>
              <LinkButton link="https://github.com/jsguysnet/beerific">
                {Language.t('global.githubLink')}
              </LinkButton>
            </div>

            <div className="project-summary">
              <h3>Presentation</h3>
              <p>
                {Language.t('projects.jsguys.presentation.text.0')}&nbsp;
                <HighLight>JavaScript</HighLight>&nbsp;
                {Language.t('projects.jsguys.presentation.text.1')}&nbsp;
                <HighLight>{Language.t('projects.jsguys.presentation.text.2')}</HighLight>&nbsp;
                {Language.t('projects.jsguys.presentation.text.3')}
              </p>
              <LinkButton link="https://github.com/jsguysnet/presentation">
                {Language.t('global.githubLink')}
              </LinkButton>
            </div>
          </div>

          <div className="element-block clearfix">
            <h2>{Language.t('projects.more.title')}</h2>
            
            <p>
              {Language.t('projects.more.text.0')}<br />
              {Language.t('projects.more.text.1')}&nbsp;
              <a href="https://github.com/schaechinger"
                target="_blank">GitHub</a>&nbsp;
              {Language.t('projects.more.text.2')}
            </p>
          </div>
        </div>
    );
  }
}

export default ProjectOverviewPage;
