import Reacht, { Component } from 'react';
import Language from '../../../Language/Language';
import Link from '../../../Elements/Link';
import './share.css';

class Share extends Component {
  constructor(props) {
    super(props);

    this.link = `https://schchn.gr/${this.props.sharekey}`;

    this.generate4Facebook = this.generate4Facebook.bind(this);
    this.generate4GooglePlus = this.generate4GooglePlus.bind(this);
    this.generate4LinkedIn = this.generate4LinkedIn.bind(this);
    this.generate4Mail = this.generate4Mail.bind(this);
    this.generate4Twitter = this.generate4Twitter.bind(this);
    this.generate4Xing = this.generate4Xing.bind(this);
  }

  generate4Facebook() {
    let text = encodeURIComponent(Language.t('blog.share.facebook'));
    let link = encodeURIComponent(this.link + 'f');

    return `https://facebook.com/sharer/sharer.php?u=${link}&t=${text}`;
  }

  generate4GooglePlus() {
    let link = encodeURIComponent(this.link + 'g');

    return `https://plus.google.com/share?url=${link}&hl=${Language.locale()}`;
  }

  generate4LinkedIn() {
    let text = encodeURIComponent(Language.t('blog.share.linkedin'));
    let link = encodeURIComponent(this.link + 'l');
    let domain = 'https://schaechinger.com';
    let title = '';

    return `https://linkedin.com/shareArticle?mini=true&url=${link}&title=${title}&summary=${text}&source=${domain}`;
  }

  generate4Mail() {
    let text = Language.t('blog.share.mail', {link: this.link + 'm'});
    text = encodeURIComponent(text);
    let title = this.props.title;

    return `mailto:?subject=${title}&body=${text}`;
  }

  generate4Twitter() {
    let text = encodeURIComponent(Language.t('blog.share.twitter'));
    let link = encodeURIComponent(this.link + 't');

    return `https://twitter.com/intent/tweet?text=${text}&url=${link}&via=theschaechinger`;
  }

  generate4Xing() {
    let text = encodeURIComponent(Language.t('blog.share.twitter'));
    let link = encodeURIComponent(this.link + 'x');

    return `https://xing.com/spi/shares/new?url=${link}&lang=${Language.locale()}`;
  }

  render() {
    return (
      <div className="post-share row">
        <div className="columns small-12">
          <h3>{Language.t('blog.share.title')}</h3>
        </div>
        <div className="columns small-12">
          <span className="twitter">
            <i className="social social-twitter" />
            <Link to={this.generate4Twitter()}>Twitter</Link>
          </span>
          <span className="facebook">
            <i className="social social-facebook" />
            <Link to={this.generate4Facebook()}>Facebook</Link>
          </span>
          <span className="xing">
            <i className="social social-xing" />
            <Link to={this.generate4Xing()}>Xing</Link>
          </span>
          <span className="linkedin">
            <i className="social social-linked-in" />
            <Link to={this.generate4LinkedIn()}>LinkedIn</Link>
          </span>
          <span className="mail">
            <i className="social social-e-mail" />
            <Link to={this.generate4Mail()}>{Language.t('socials.mail')}</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Share;
