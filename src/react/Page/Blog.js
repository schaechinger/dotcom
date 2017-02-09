import React from 'react';
import Page from './Page';
import 'whatwg-fetch';
require('es6-promise').polyfill();

class BlogPage extends Page {
  render() {
    return this.props.children;
  }
}

export default BlogPage;
