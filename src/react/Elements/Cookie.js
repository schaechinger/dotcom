import React, { Component } from 'react';
import Language from '../Language/Language';
import Link from './Link';
import './cookie.css';

const COOKIE_SHOWN = 'cookiePopupShown';

class CookiePopup extends Component {
  constructor(props) {
    super(props);

    let shown = false;
    if (window.localStorage) {
      shown = window.localStorage.getItem(COOKIE_SHOWN);
    }

    this.state = {
      shown: shown
    };

    this.onDismiss = this.onConfirm.bind(this);
  }

  onConfirm() {
    window.localStorage.setItem(COOKIE_SHOWN, true);
    this.setState({
      shown: true
    });
  }

  render() {
    if (!this.state.shown) {
      return (
        <div className="cookie-confirm clearfix">
          <div className="row">
            <div className="columns small-12">
              <p>
                <i className="glyphicons glyphicons-remove" onClick={this.onDismiss} />
                {Language.t('cookie.text.0')}
              </p>
            </div>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

export default CookiePopup;
