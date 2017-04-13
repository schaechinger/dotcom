import React, { Component } from 'react';

class ImageContent extends Component {
  render() {
    let text = this.props.text;
    let src = this.props.image;
    if (!src.match(/^(http|\/)/)) {
      src = `/img/blog/${this.props.uid}/${src}`;
    }

    let content = null;

    if (this.props.renderType) {
      content = <img src={src} alt={text} />;
    }
    else {
      content = <div className="image" style={{backgroundImage: `url(${src})`}} />;
    }

    if (!this.props.full) {
      content = (
        <div className="row">
          {content}
        </div>
      );
    }

    if (text) {
      content = (
        <div>
          {content}
          <div className="row">
            <div className="columns small-12">
              {text ? <p>{text}</p> : null}
            </div>
          </div>
        </div>
      );
    }

    return content;
  }
}

export default ImageContent;
