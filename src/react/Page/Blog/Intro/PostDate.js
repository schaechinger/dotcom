import React, { Component } from 'react';
import Language from '../../../Language/Language';
import './post-date.css';

class PostDate extends Component {
  render() {
    let date = new Date(this.props.date);

    if (isNaN(date.getTime())) {
      return null;
    }

    return (
      <div className="post-date">
        <span className="month">{Language.t('global.months.' + date.getMonth())}</span>
        <span className="date">{date.getDate()}</span>
        <span className="year">{date.getFullYear()}</span>
      </div>
    );
  }
}

export default PostDate;
