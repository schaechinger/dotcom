import React, { Component } from 'react';
import './highlight.css';

class HighLight extends Component {
  render() {
    return <em className="highlight">{this.props.children}</em>;
  }
}

export default HighLight;
