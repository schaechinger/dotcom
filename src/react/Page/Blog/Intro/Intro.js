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

    if (isPreview) {
      classNames += ' preview';
      moreLink = <Link to={link}> ...</Link>;
      title = (
        <Link to={link} className="title">
          <h2>{this.getPreviewNotice()}{this.props.title}</h2>
        </Link>
      );
      intro = intro.replace(/[^a-z0-9]+$/i, '');
    }

    return (
      <div className={classNames}>
        <div className="intro clearfix">
          <div className="columns medium-2 large-offset large-2 show-for-medium-up">
            <PostDate date={this.props.date} />
          </div>
          <div className="columns small-12 show-for-small-only">
            <DateFormatter at={this.props.date} long />
          </div>
          <div className="columns small-12 medium-8 large-8 end">
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
/*
  render() {
    let link = `/blog/${this.props.uid}`;
    let intro = this.props.intro;
    intro = intro.replace(/[^a-z0-9]+$/i, '');

    return (
      <div className="post-preview clearfix">
        <div className="columns medium-2 large-offset-1 large-1 show-for-medium-up post-date">
          <PostDate date={this.props.date} />
        </div>
        <div className="columns small-12 medium-10 large-8 end">
          
          <p>
            <PostTag tag={this.props.tag} />
            {intro}&nbsp;<Link to={link}>...</Link>
          </p>
          <div className="meta-bar show-for-small-only">
            <DateFormatter at={this.props.date} long />
          </div>
        </div>
      </div>
      */
}

export default Intro;
