import React, { Component } from 'react';
import NotFound from './Post/NotFound';
import Post from './Post/Post';
import Loading from '../../Elements/Loading';
import Api from '../../Service/Api';

class Switcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      post: null
    };
  }

  componentDidMount() {
    Api.getPostContent(this.props.params.uid)
      .then((post) => {
        let state = {
          loaded: true
        };
        if (post.success) {
          state.post = post.post;
        }

        this.setState(state);
      });
  }

  render() {
    if (!this.state.loaded) {
      return <Loading />;
    }

    if (this.state.post) {
      return <Post post={this.state.post} />;
    }
    else {
      return <NotFound />;
    }
  }
}

export default Switcher;
