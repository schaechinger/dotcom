import React from 'react';
import Page from '../Page';
import JsguysPage from './Jsguys';
import HighLight from '../../Elements/HighLight';

class ProjectsPage extends Page {
  render() {
    return (
      <div className="row">
        <div className="page-projects">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export const Jsguys = JsguysPage;

export default ProjectsPage;

