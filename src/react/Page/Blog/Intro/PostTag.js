import React, { Component } from 'react';
import Language from '../../../Language/Language';
import Link from '../../../Elements/Link';
import './post-tag.css';

class PostTag extends Component {
  render() {
    let tag = this.props.tag;

    if (tag) {
      let tagKey = `blog.tags.${tag}`;
      let tagTranslation = Language.t(tagKey);
      if (tagKey === tagTranslation) {
        tagTranslation = tag;
      }

      return (
        <Link to={`/blog/tag/${tag}`} className="main-tag">{tagTranslation}</Link>
      );
    }

    return null;
  }
}

export default PostTag;
