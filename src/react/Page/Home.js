import React from 'react';
import Link from '../Elements/Link';
import Page from './Page';
import HighLight from '../Elements/HighLight';
import LinkButton from '../Elements/LinkButton';
import Language from '../Language/Language';
import './home.css';

class HomePage extends Page {
  constructor(props) {
    super(props);

    this.state = {
      displayLangSwitch: false
    };
  }

  getLangSwitch() {
    let switcher = null;

    if (!Language.matchesUser()) {
      const root = `lang.${Language.bestMatch()}.`;
      const style = {
        opacity: +this.state.displayLangSwitch
      };

      switcher = (
        <div className="row lang-switch" style={style}>
          <div className="columns small-12">
            <p>{Language.t(`${root}switch.text.0`)}<Link
              lang={Language.bestMatch()}>{Language.t(`${root}name`)}</Link>
              {Language.t(`${root}switch.text.1`)}</p>
          </div>
        </div>
      );
    }

    return switcher;
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        displayLangSwitch: true
      });
    }, 750);
  }

  render() {
    return (
      <div className="page-home no-page-padding">
        <div className="clearfix">
          <div className="hero">
            {this.getLangSwitch()}
            <h1>Manuel Schächinger</h1>
            <h3>{Language.t('home.job')}</h3>
          </div>
        </div>
        
        <div className="element-block highlight-block">
          <div className="row">
            <div className="center">
              <div className="columns small-3">
                <Link to="/about">
                  <i className="glyphicons glyphicons-user" /><br />
                  <span>{Language.t('nav.about')}</span>
                </Link>
              </div>
              <div className="columns small-3">
                <Link to="/projects">
                  <i className="glyphicons glyphicons-lab" /><br />
                  <span>{Language.t('nav.projects.projects')}</span>
                </Link>
              </div>
              <div className="columns small-3">
                <Link to="/resume">
                  <i className="glyphicons glyphicons-education" /><br />
                  <span>{Language.t('nav.resume')}</span>
                </Link>
              </div>
              <div className="columns small-3">
                <Link to="/blog">
                  <i className="glyphicons glyphicons-book" /><br />
                  <span>{Language.t('nav.blog')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row element-block">
          <div className="columns small-12">
            <h2>{Language.t('home.welcome.title')}</h2>
            
            <p>{Language.t('home.welcome.text')}</p>
          </div>
        </div>

        <div className="row element-block">
          <div className="columns small-12">
            <h2>jsguys</h2>

            <p dangerouslySetInnerHTML={{__html: Language.t('home.jsguys.text')}} />

            <LinkButton link="http://www.jsguys.net">{Language.t('home.jsguys.link')}</LinkButton>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
