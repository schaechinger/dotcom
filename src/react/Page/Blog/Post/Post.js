import React, { Component } from 'react';
import Api from '../../../Service/Api';
import Language from '../../../Language/Language';
import PostHeader from './Header/Header';
import Share from './Share';
import Intro from '../Intro/Intro';
import Content from './Content/Content';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.post = this.props.post;
  }

  getPreviewNotice() {
    let notice = null;

    if ('preview' === this.post.get('status')) {
      let token = Api.getPreviewToken();
      let shareLink = `mailto:?subject=Blog Preview&body=https://schaechinger.com/de/blog/preview?token=${token}`;

      notice = (
        <div className="row highlight-block" style={{marginTop: '1em', padding: '1em 0'}}>
          <div className="columns small-12">
            <a href={shareLink}>
              <h3>
                <i className="glyphicons glyphicons-pencil" />
                &nbsp;Preview
              </h3>
            </a>
          </div>
        </div>
      );
    }

    return notice;
  }

  componentDidMount() {
    window.updateHelmet({
      description: this.post.get('intro'),
      title: this.post.get('title')
    });
  }

  render() {
    let pageClass = 'page-blog-post';

    let headerElement = (
      <PostHeader {...this.post.export(['header', 'location'])} />
    );

    let shareElement = (
      <Share {...this.post.export(['sharekey', 'title', 'intro'])} />
    );

    let introElement = <Intro {...this.post.export(['tag', 'date', 'intro'])} />;

    let titleElement = (
      <div className="title-element row">
        <div className="columns small-12">
          {this.getPreviewNotice()}
          <h1>{this.post.get('title')}</h1>
        </div>
      </div>
    );

    let content = [];
    let body = this.post.get('body');

    if ('object' === typeof body) {
      body.forEach((element, index) => {
        let cnt = Content.createComponent(element, index, this.post);
        if (cnt) {
          content.push(cnt);
        }
      });
    }

    let contentElement = content;

    let header = this.post.get('header');
    if ('image' === header.type) {
      pageClass += ' no-page-padding';
    }

    return (
      <div className={pageClass}>
        {headerElement}
        {titleElement}
        <div className="element-block">
          {introElement}
        </div>
        <div className="post-content">
          {contentElement}
        </div>
        <div className="element-block">
          {shareElement}
        </div>
      </div>
    );
  }
}

export default BlogPost;
