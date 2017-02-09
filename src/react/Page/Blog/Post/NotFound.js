import React, { Component } from 'react';
import Language from '../../../Language/Language';
import LinkButton from '../../../Elements/LinkButton';

class PostNotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="columns small-12">
          <h1>{Language.t('blog.notFound.title')}</h1>
          <p>{Language.t('blog.notFound.text.0')}</p>
          <LinkButton link="/blog">{Language.t('blog.notFound.back')}</LinkButton>
        </div>
      </div>
    );
  }
}

export default PostNotFound;
