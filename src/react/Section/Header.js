import React, { Component } from 'react';
import Link from '../Elements/Link';
import Language from '../Language/Language';
import Navigation from './Navigation';
import Socials from './Socials';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row header clearfix">
          <div className="columns small-12">
            <span className="title">
              <Link to="/">
                <span className="m-logo logo-sm">M/</span><span className="m-logo logo-l">Manuel</span>Schächinger
              </Link>
            </span>
            <Navigation />
            <div className="show-for-large-up right">
              <Socials invert />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
