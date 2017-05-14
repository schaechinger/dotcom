import React, { Component } from 'react';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Page/Home';
import About from './Page/About';
import NotFound from './Page/NotFound';
import Projects, { Jsguys } from './Page/Projects';
import ProjectOverview from './Page/Projects/Overview';
import ProjectHousemaid from './Page/Projects/Housemaid';
import ProjectFeader from './Page/Projects/Feader';
import Resume from './Page/Resume';
import Blog from './Page/Blog';
import BlogList from './Page/Blog/List/List';
import BlogListTag from './Page/Blog/List/Tag';
import BlogSwitch from './Page/Blog/Switcher';
import Contact from './Page/Contact';
import Imprint from './Page/Imprint';
import Privacy from './Page/Privacy';
import Bing from './Page/Bing';

class AppRoutes extends Component {
  constructor(props) {
    super(props);

    this.liveEnv = 0 === window.location.hostname.indexOf('www.');

    this.routes = (
      <Route path="/" component={App}>
        <Route path="de">
          {this.getRoutes()}
        </Route>
        <Route path="en">
          {this.getRoutes()}
        </Route>
        <Route path="*" component={NotFound} status="404" />
      </Route>
    );

    this.processUpdate = this.processUpdate.bind(this);
    this.updateGa = this.updateGa.bind(this);

    if (this.liveEnv) {
      this.initGa();
    }
  }

  getRoutes() {
    return (
      <Route>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="projects" component={Projects}>
          <IndexRoute component={ProjectOverview} />
          <Route path="housemaid" component={ProjectHousemaid} />
          <Route path="feader" component={ProjectFeader} />
          <Route path="jsguys">
            <IndexRoute component={Jsguys} />
          </Route>
        </Route>
        <Route path="resume" component={Resume} />
        <Route path="blog" component={Blog}>
          <IndexRoute component={BlogList} />
          <Route path="tag/:tag" component={BlogListTag} />
          <Route path="page/:page" component={BlogList} />
          <Route path="preview" component={BlogList} />
          <Route path=":uid" component={BlogSwitch} />
        </Route>
        <Route path="imprint" component={Imprint} />
        <Route path="privacy" component={Privacy} />
        <Route path="bing(/:year/:month)" component={Bing} />
        <Redirect from="cv" to="resume" />
        <Redirect from="skills" to="resume" />
      </Route>
    );
  }

  processUpdate() {
    const { hash } = window.location;

    this.updateGa();

    if (hash !== '') {
      setTimeout(() => {
        const id = hash.substr(1);;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }

  initGa() {
    function gaFn(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    }
    gaFn(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create','UA-70769809-1','auto');
    ga('set','anonymizeIp',true);
  }

  updateGa() {
    if (this.liveEnv) {
      const { pathname, hash, search } = window.location;
      const page = pathname + search + hash;
      ga('send', 'pageview', { page });
    }
  }

  render() {
    return (
      <Router
        history={browserHistory}
        routes={this.routes}
        onUpdate={this.processUpdate}
      />
    );
  }
}

export default AppRoutes;
