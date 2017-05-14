import React from 'react';
import Projects from '../';
import HighLight from '../../../Elements/HighLight';
import Language from '../../../Language/Language';
import LinkButton from '../../../Elements/LinkButton';

export default () => (
  <div className="columns small-12 page-projects-housemaid">
    <h1>{Language.t('projects.housemaid.meta.title')}</h1>
    
    <p>{Language.t('projects.housemaid.text.0')}</p>
    <p>{Language.t('projects.housemaid.text.1')}</p>
    <p>{Language.t('projects.housemaid.text.2')}</p>
    <p>{Language.t('projects.housemaid.text.3')}</p>
    <p>{Language.t('projects.housemaid.text.4')}</p>
    <ul>
      <li>{Language.t('projects.housemaid.features.0')}</li>
      <li>{Language.t('projects.housemaid.features.1')}</li>
      <li>{Language.t('projects.housemaid.features.2')}</li>
      <li>{Language.t('projects.housemaid.features.3')}</li>
      <li>{Language.t('projects.housemaid.features.4')}</li>
      <li>{Language.t('projects.housemaid.features.5')}</li>
      <li>{Language.t('projects.housemaid.features.6')}</li>
    </ul>
    <LinkButton link="https://github.com/schaechinger/housemaid">
      {Language.t('global.githubLink')}
    </LinkButton>
  </div>
);
