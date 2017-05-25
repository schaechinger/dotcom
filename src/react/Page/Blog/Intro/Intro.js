import React, { Component } from 'react';
import Language from '../../../Language/Language';
import Link from '../../../Elements/Link';
import PostDate from './PostDate';
import PostTag from './PostTag';
import DateFormatter from '../../../Elements/Date';
import './intro.css';

class Intro extends Component {
  getPreviewNotice() {
    let notice = null;

    if ('preview' === this.props.status) {
      notice = <i className="glyphicons glyphicons-pencil" />;
    }

    return notice;
  }

  render() {
    let isPreview = !!this.props.preview;
    let classNames = 'row post-intro';
   
    let moreLink = null;
    let link = `/blog/${this.props.uid}`;
    let title = null;
    let tag = this.props.tag || null;
    let intro = this.props.intro;
    intro = intro.replace(/^<p>|<\/p>$/g, '');
    let dateStyle = {};

    if (isPreview) {
      classNames += ' preview';
      moreLink = <Link to={link}> ...</Link>;
      title = (
        <Link to={link} className="title">
          <h2>{this.getPreviewNotice()}{this.props.title}</h2>
        </Link>
      );
      intro = intro.replace(/[^a-z0-9]+$/i, '');

      if (this.props.header && 'image' === this.props.header.type) {
        classNames += ' image';
        let src = this.props.header.src;
        src = src.replace('header', 'header-thumb');
        dateStyle['backgroundImage'] = `url(${src})`;
      }
    }

    return (
      <div className={classNames}>
        <div className="intro clearfix">
          <div
            className="columns small-12 medium-4 large-3 date-column"
            style={dateStyle}
          >
            <PostDate date={this.props.date} />
          </div>
          <div className="columns small-12 medium-8 large-9">
            {title}
            <p>
              <PostTag tag={tag} />
              {intro}
              {moreLink}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
