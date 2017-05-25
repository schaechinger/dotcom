import React from 'react';
import Page from '../Page';
import Link from '../../Elements/Link';
import HighLight from '../../Elements/HighLight';
import LinkButton from '../../Elements/LinkButton';
import Language from '../../Language/Language';
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
            <div className="clearfix">
              <div className="columns small-12 medium-4 medium-push-4">
                <h3>
                  <i className="glyphicons glyphicons-book" />
                  {Language.t('nav.blog')}
                </h3>
                <p>{Language.t('blog.meta.description')}</p>
                <span className="show-for-small-only">
                  <LinkButton link="/blog">{Language.t('home.more.blog')}</LinkButton>
                </span>
              </div>
              
              <div className="columns small-12 medium-4 medium-pull-4">
                <h3>
                  <i className="glyphicons glyphicons-lab" />
                  {Language.t('nav.projects.projects')}
                </h3>
                <p>{Language.t('projects.meta.description')}</p>
                <span className="show-for-small-only">
                  <LinkButton link="/projects">{Language.t('home.more.projects')}</LinkButton>
                </span>
              </div>

              <div className="columns small-12 medium-4">
                <h3>
                  <i className="glyphicons glyphicons-education" />
                  {Language.t('nav.resume')}
                </h3>
                <p>{Language.t('resume.meta.description')}</p>
                <span className="show-for-small-only">
                  <LinkButton link="/resume">{Language.t('home.more.resume')}</LinkButton>
                </span>
              </div>
            </div>

            <div className="show-for-medium-up clearfix">
              <div className="columns medium-4">
                <LinkButton link="/projects">{Language.t('home.more.projects')}</LinkButton>
              </div>
              <div className="columns medium-4">
                <LinkButton link="/blog">{Language.t('home.more.blog')}</LinkButton>
              </div>
              <div className="columns medium-4">
                <LinkButton link="/resume">{Language.t('home.more.resume')}</LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="row element-block">
          <div className="columns small-12">
            <h2>{Language.t('home.welcome.title')}</h2>
            
            <p>
              {Language.t('home.welcome.text.0')}<br />
              {Language.t('home.welcome.text.1')}
            </p>

            <LinkButton link="/about">{Language.t('nav.about')}</LinkButton>
          </div>
        </div>

        <div className="row element-block">
          <div className="columns small-12">
            <h2>{Language.t('home.more.title')}</h2>
          </div>
          <div className="columns small-12 medium-6">
            <h3>jsguys</h3>

            <p>{Language.t('home.jsguys.text')}</p>

            <LinkButton link="http://www.jsguys.net">{Language.t('home.more.jsguys')}</LinkButton>
          </div>

          <div className="columns small-12 medium-6">
            <h3>Die Verlagsprofis</h3>

            <p>{Language.t('projects.verlagsprofis.text.0')}</p>

            <LinkButton link="http://www.die-verlagsprofis.de">{Language.t('home.more.verlagsprofis')}</LinkButton>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
