import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Language from '../../../Language/Language';
import Loading from '../../../Elements/Loading';
import Intro from '../Intro/Intro'
import Pagination from '../Pagination';
import Api from '../../../../shared/Blog/Service/Api';
import SignupForm from '../Signup/SignupForm';
import './list.css';

class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      page: this.props.params.page || 1
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  insertContent() {
    // TODO add live blog component

    return null;
  }

  onPageChange(page) {
    page++;
    let url = `/${Language.locale()}/blog`;
    if (1 !== page) {
      url += `/page/${page}`;
    }

    browserHistory.push(url)
    this.queryPosts(page);
  }

  generatePreviews() {
    let previews = [];

    if (this.state.posts) {
      this.state.posts.forEach((post) => {
        previews.push(
          <div key={post.get('uid')} className="columns small-12 post-preview">
            <Intro {...post.export() } preview />
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
                {Language.t('blog.error.title')}
              </h3>
              <p>{Language.t('blog.error.text.0')}</p>
            </div>
          </div>
        </div>
      );
    }
  }

  queryPosts(page = this.state.page) {
    Api.listPosts(page)
      .then((posts) => {
        this.setState(posts);
      });
  }

  componentDidMount() {
    if (window.location.search) {
      // TODO check if token exists
      const token = window.location.search.substr(7);
      Api.enablePreview(token);

      browserHistory.push('/de/blog');
    }

    this.queryPosts();
  }

  getPagination() {
    if (this.state.pages) {
      return (
        <Pagination
          total={this.state.pages}
          current={this.state.page - 1}
          callback={this.onPageChange}
        />
      );
    }
    
    return null;
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
        <div className="row">
          <div className="columns small-12">
            {this.getPagination()}
          </div>
        </div>
        <div className="row">
          <div className="columns small-12 large-8 large-offset-2 end">
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogList;
