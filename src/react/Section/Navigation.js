import React, { Component } from 'react';
import Language from '../Language/Language';
import { MailButton } from '../Elements/LinkButton';
import Link from '../Elements/Link';
import navItems from './navigation.json';
import './navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
      items: navItems
    };

    this.clickNavButton = this.clickNavButton.bind(this);
  }

  generateNav(items) {
    items = items || this.state.items;
    let nav = [];

    for (let url in items) {
      if (items.hasOwnProperty(url)) {
        let item = items[url];
        let children = null;
        let title = item;
        if ('object' === typeof item && item.title) {
          title = item.title;
          children = <ul>{this.generateNav(item.items)}</ul>;
        }
        
        nav.push(
          <li className="nav-item"
            key={url}
            onClick={() => {this.clickNavButton(false)}}
          >
            <Link to={url} activeClassName="active">
              <span>{Language.t(title)}</span>
            </Link>
            {children}
          </li>
        );
      }
    }

    return nav;
  }

  clickNavButton(navState) {
    let shown = !this.state.shown;

    if ('boolean' === typeof navState) {
      shown = navState;
    }

    this.setState({
      shown: shown
    });
  }

  render() {
    return (
      <span className="nav-element">
        <div className="show-for-small-only right">
          <i
            className="glyphicons glyphicons-show-lines mobile-nav-button"
            onClick={this.clickNavButton}
          >
            <span className="lines" />
          </i>
        </div>
        <ul className={'nav' + (this.state.shown ? ' nav-active' :'')}>
          {this.generateNav()}
        </ul>
      </span>
    );
  }
}

export default Navigation;
