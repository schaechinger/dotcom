import React, { Component } from 'react';
import marked from 'marked';

class TextContent extends Component {
  render() {
    let text = this.props.text;
    
    text = text.replace(/\\n/g, '\n');
    text = text.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );
    text = marked(text);

    return (
      <div className="row">
        <div className="columns small-12">
          <div dangerouslySetInnerHTML={{__html: text}} />
        </div>
      </div>
    );
  }
}

export default TextContent;
