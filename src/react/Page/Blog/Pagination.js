import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.pages = [];

    this.state = {
      current: this.props.current
    };

    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(page) {
    this.setState({
      current: page
    });

    this.props.callback(page);
  }

  wrap(content, key, page = -1) {
    let config = {
      key,
      className: 'page'
    };

    if (-1 !== page) {
      config.onClick = () => {this.onPageChange(page)};
      config.className += ' clickable';
    }

    this.pages.push(<span {...config}>{content}</span>);
  }

  generatePages() {
    this.pages = [];

    if (0 < this.props.current) {
      this.wrap(
        <i className="glyphicons glyphicons-chevron-left" />,
        'previous',
        this.state.current - 1
      );
    }

    for (let i = 0; this.props.total > i; i++) {
      let content = null;
      let abs = Math.abs(i - this.state.current);

      if (i === this.state.current) {
        this.wrap(i + 1, i);
      }
      else if (1 === abs || 0 === i || i + 1 === this.props.total) {
        this.wrap(i + 1, i, i);
      }
      else if (2 === abs) {
        this.wrap('...', i);
      }
    }

    if (this.state.current + 1 < this.props.total) {
      this.wrap(
        <i className="glyphicons glyphicons-chevron-right" />,
        'next',
        this.state.current + 1
      );
    }
  }

  render() {
    if (1 >= this.props.total) {
      return null;
    }

    this.generatePages();

    return (
      <div className="pagination">
        {this.pages}
      </div>
    );
  }
}

export default Pagination;
