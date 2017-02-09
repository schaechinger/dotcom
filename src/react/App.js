import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Language from './Language/Language';
import Head from './Head';
import Cookie from './Elements/Cookie';
import Header from './Section/Header';
import Footer from './Section/Footer';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.scrollTop = true;
  }

  render() {
    if (this.scrollTop) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else {
      this.scrollTop = true;
    }

    Language.setLanguage();

    let classNames = 'app';
    if (!Language.matchesUser()) {
      classNames += ' lang-diff';
    }

    return (
      <div className={classNames}>
        <Head />
        <Header />
        <main className="page">
          {this.props.children}
        </main>
        <Footer />
        <Cookie />
      </div>
    );
  }
}

export default App;
