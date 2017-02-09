import React, { Component } from 'react';
import ImageHeader from './Image';
import './header.css';

class BlogPostHeader extends Component {
  render() {
    let content = null;

    let header = this.props.header || {}
    
    switch (header.type) {
      case 'image':
        content = <ImageHeader header={header} location={this.props.location} />;
        break;

      case 'map':
        break;

      default:
        break;
    }

    return content;
  }
}

export default BlogPostHeader;
