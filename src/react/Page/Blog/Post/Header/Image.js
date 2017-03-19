import React, { Component } from 'react';

class ImageHeader extends Component {
  render() {
    let style = {
      backgroundImage: `url(${this.props.header.src})`,
      backgroundPosition: this.props.header.position || 'center center'
    };

    return (
      <div className="post-header image" style={style}>
        <div className="header-bg show-for-medium-up">
          <div className="row">
            <div className="columns small-12">
              <p>{this.props.location}</p>
            </div>
          </div>
        </div>
        <img src={this.props.header.src} alt="" style={{display: 'none'}} />
      </div>
    );
  }
}

export default ImageHeader;
