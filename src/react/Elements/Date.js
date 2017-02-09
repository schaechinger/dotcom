import React, { Component } from 'react';
import Language from '../Language/Language';

class DateFormatter extends Component {
  getDate() {
    let date = new Date(this.props.at);

    if (!date) {
      date = new Date();
    }

    return date;
  }

  render() {
    let date = this.getDate();

    let config = {
      month: Language.t('global.months.' + date.getMonth()),
      year: date.getFullYear(),
    };

    let format = 'global.dateFormat';
    if (this.props.long) {
      format += 'Long';
      config.date = date.getDate();

      let extensions = Language.t('global.dateExtension').split('|');
      let dateExtension = date.getDate() % 10;
      if (dateExtension >= extensions.length) {
        dateExtension = 0;
      }
      config.dateExtension = extensions[dateExtension];
    }

    return <span className="date">{Language.t(format, config)}</span>
  }
}

export default DateFormatter;
