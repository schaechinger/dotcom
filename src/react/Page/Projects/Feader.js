import React from 'react';
import Projects from '../Projects';
import HighLight from '../../Elements/HighLight';
import Language from '../../Language/Language';
import LinkButton from '../../Elements/LinkButton';

class FeaderPage extends Projects {
  render() {
    return (
        <div className="columns small-12 page-projects-housemaid">
          <h1>{Language.t('projects.feader.meta.title')}</h1>
          
          <p>{Language.t('projects.feader.text.0')}</p>
          <p>{Language.t('projects.feader.text.1')}</p>
          <p>{Language.t('projects.feader.text.2')}</p>
          <p>{Language.t('projects.feader.text.3')}</p>
          <p>{Language.t('projects.feader.text.4')}</p>
          
          <LinkButton link="https://github.com/schaechinger/feader">
            {Language.t('global.githubLink')}</LinkButton>
        </div>
    );
  }
}

export default FeaderPage;
