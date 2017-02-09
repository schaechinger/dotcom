import React, { Component } from 'react';
import Language from '../Language/Language';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="row">
        <div className="columns small-12 center loading">
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
          <p>{Language.t('global.loading')}</p>
        </div>
      </div>
    );
  }
}

export default Loading;