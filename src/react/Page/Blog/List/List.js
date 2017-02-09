import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Language from '../../../Language/Language';
import Loading from '../../../Elements/Loading';
import Intro from '../Intro/Intro'
import Api from '../../../Service/Api';
import './list.css';

class BlogList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: null
    };
  }

  insertContent() {
    // TODO add live blog component

    return null;
  }

  generatePreviews() {
    let previews = [];

    if (this.state.posts) {
      this.state.posts.forEach((post) => {
        previews.push(
          <div key={post.get('uid')} className="columns small-12 post-preview">
            <Intro {...post.export()} preview />
          </div>
        );
      });
    }

    return previews;
  }

  getGermanOnlyHint() {
    let germanOnly = null;

    if ('de' !== Language.locale()) {
      germanOnly = (
        <div className="element-block highlight-block">
        <div className="row">
          <div className="columns small-12 medium-10 medium-offset-1">
            <h3>
              <i className="glyphicons glyphicons-conversation" />&nbsp;
              {Language.t('blog.germanOnly.title')}
            </h3>

            <p>{Language.t('blog.germanOnly.text.0')}</p>
          </div>
        </div>
        </div>
      );
    }

    return germanOnly;
  }

  getContent() {
    if (!this.state.posts) {
      return <Loading />;
    }

    if (this.state.posts.length) {
      return (
        <div> 
          {this.getGermanOnlyHint()}
          {this.insertContent()}
          <div className="element-block">
            <div className="row">
              <div>
                {this.generatePreviews()}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="element-block highlight-block">
          <div className="row">
            <div className="columns small-12 medium-10 medium-offset-1">
              <h3>
                <i className="glyphicons glyphicons-king" />
                {Language.t('blog.wait.title')}
              </h3>
              <p>{Language.t('blog.wait.text.0')}</p>
              <p>{Language.t('blog.wait.text.1')}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  queryPosts() {
    let self = this;

    Api.listPosts(0)
      .then((posts) => {
        self.setState(posts);
      });
  }

  componentDidMount() {
    let self = this;

    if (window.location.search) {
      // TODO check if token exists
      let token = window.location.search.substr(7);
      Api.enablePreview(token);

      browserHistory.push('/de/blog');
    }

    this.queryPosts();
  }

  render() {
    let content = this.getContent();

    return (
      <div className="page-blog-list">
        <div className="row">
          <div className="columns small-12">
            <h1>Blog</h1>
          </div>
        </div>
        {content}
      </div>
    )
  }
}

export default BlogList;
