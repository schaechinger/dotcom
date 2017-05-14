import React, { Component } from 'react';
import Language from '../../../Language/Language';
import './signup-form.css';

class NewsletterSignup extends Component {
  render() {
    return (
      <div className="signup-form">
        <h3>{Language.t('blog.subscribe.headline')}</h3>
        <div id="mc_embed_signup">
          <form action="//schaechinger.us15.list-manage.com/subscribe/post?u=5312e9562a4bbe10976129158&amp;id=a54e0e9274" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
            className="clearfix" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <p>{Language.t('blog.subscribe.text.0')}</p>
              <input type="email" name="EMAIL" id="mce-EMAIL" placeholder={Language.t('blog.subscribe.email')} />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_5312e9562a4bbe10976129158_a54e0e9274" tabIndex="-1" /></div>
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="link-button">{Language.t('blog.subscribe.button')}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsletterSignup;
