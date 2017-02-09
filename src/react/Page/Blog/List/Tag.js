import React from 'react';
import { browserHistory } from 'react-router';
import BlogList from './List';
import Api from '../../../Service/Api';
import Language from '../../../Language/Language';
import MapContent from '../Post/Content/Map';

class BlogListTag extends BlogList {
  constructor(props) {
    super(props);
    
    this.state.locations = [];

    this.onClickTag = this.onClickTag.bind(this);
  }

  componentDidMount() {
    let self = this;

    super.componentDidMount();

    if ('travel' === self.props.params.tag) {
      Api.getTravelLocations()
        .then((locations) => {
          self.setState(locations);
        });
    }
  }

  queryPosts() {
    let self = this;

    Api.listPostsByTag(0, this.props.params.tag)
      .then((posts) => {
        self.setState(posts);
      });
  }

  onClickTag() {
    browserHistory.push('/de/blog');
  }

  insertContent() {
    let content = null;

    // render travel map
    if (this.state.locations.length) {
      const options = {
        locations: this.state.locations,
        marker: true
      };

      content = <MapContent {...options} />;
    }

    let tagKey = `blog.tags.${this.props.params.tag}`;
    let tagTranslation = Language.t(tagKey);
    if (tagKey === tagTranslation) {
      tagTranslation = tag;
    }

    return (
      <div>
        <div className="row">
          <div className="columns small-12 post-search clearfix">
            <span className="filter tag" onClick={this.onClickTag}>
              Tag: {tagTranslation}
            </span>
          </div>
        </div>
        {content}
      </div>
    );
  }
}

export default BlogListTag;
