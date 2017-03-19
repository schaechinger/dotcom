import react from 'react';
import Page from './Page';
import DateFormatter from '../Elements/Date';
import './bing.css';

const THUMB_BASE = 'https://bing.schaechinger.com/images/';

class BingPage extends Page {
  generateThumb(prefix, date, small = true) {
    let className = 'bing-thumb columns ';
    let thumbDir = 'thumb/';
    if (small) {
      className += 'small-6 medium-4 large-3 end';
    }
    else {
      className += 'small-12';
      thumbDir = '';
    }

    if (10 > date) {
      date = '0' + date;
    }
    else {
      date = '' + date;
    }
    let imageKey = `${prefix}-${date}`;
    
    return (
      <div key={imageKey} className={className}>
        <a href={`${THUMB_BASE + imageKey}.jpg`} target="_blank">
          <div style={{'backgroundImage': `url(${THUMB_BASE + thumbDir + imageKey}.jpg)`}}>
            <span>{date}</span>
          </div>
        </a>
      </div>
    );
  }

  render() {
    let date = new Date();
    let isCurrent = true;
    if (this.props.params.year && this.props.params.month) {
      date = new Date(
        parseInt(this.props.params.year),
        parseInt(this.props.params.month),
        0
      );
      isCurrent = false;
    }
    // TODO include date lib from crawler
    let month = date.getMonth() + 1;
    if (10 > month) {
      month = '0' + month;
    }
    let prefix = `${date.getFullYear()}-${month}`;
    let start = parseInt(date.getDate());
    let images = [];

    if (isCurrent) {
      images.push(this.generateThumb(prefix, date.getDate(), false));
      start--;
    }

    for (let i = start; 0 < i; i--) {
      images.push(this.generateThumb(prefix, i));
    }

    let currentMonth = <DateFormatter at={`${prefix}-01`} />

    return (
      <div className="page-bing">
        <div className="row">
          <div className="columns small-12">
            <h1>Bing Image Archive | {currentMonth}</h1>
          </div>
          {images}
        </div>
      </div>
    );
  }
}

export default BingPage;
