const format = require('dateformat');

const Cache = require('../Cache');
const Api = require('../../../shared/Blog/Service/Api');
const MetaBuilder = require('../../../shared/Service/MetaBuilder');

class BlogCache extends Cache {
  constructor() {
    super();

    this.postDates = [];
    this.metaBuilder = new MetaBuilder();

    // get latest posts for feed generation
    Api.listPosts(1, 25)
      .then((data) => {
        if (data.success) {
          data.posts.forEach((post) => {
            this._updatePostDates(post);
            this.data[post.get('uid')] = post;
          });
        }
      });
  }

  buildMeta(post) {
    let metadata = {
      article: {
        publisher: 'https://facebook.com/schaechinger',
        author: 'https://facebook.com/schaechinger',
        section: post.get('tag'),
        published_time: this.formatDate(post.get('publishDate')),
        modified_time: this.formatDate(post.get('updateDate')),
        tag: [post.get('tag')]
      },
      og: {
        type: 'article',
        updated_time: this.formatDate(post.get('updateDate')),
      },
      twitter: {}
    };

    const postHeader = post.get('header');
    if (postHeader && postHeader.src) {
      let origin = 'https://www.schaechinger.com';
      if ('undefined' !== typeof window) {
        origin = window.location.origin;
      }
      else {
        const config = require('../../../../config/');
        origin = config.host;
      }

      const img = origin + postHeader.src;
      metadata.og.image = img;
      // TODO: get dimensions from image or serve through post data
      metadata.og['image:width'] = '1920';
      metadata.og['image:height'] = '1440';
      metadata.twitter.image = img;
    }

    this.metaBuilder.init(post.get('title'), post.get('intro'), null, '/blog/' + post.get('uid'));
    this.metaBuilder.updateMeta(metadata);

    return this.metaBuilder.getMeta();
  }

  buildLink(post) {
    let links = [];

    const postHeader = post.get('header');
    if (postHeader && postHeader.src) {
      let origin = 'https://www.schaechinger.com';
      if ('undefined' !== typeof window) {
        origin = window.location.origin;
      }
      else {
        const config = require('../../../../config/');
        origin = config.host;
      }

      links.push({
        rel: 'image_src',
        href: origin + postHeader.src
      });
    }

    return links;
  }

  getPostsForFeed(lang) {
    let posts = [];

    this.postDates.forEach((data) => {
      posts.push(this.get(data.slug));
    });

    return Promise.all(posts);
  }

  _loadCacheData(slug) {
    return Api.getPostContent(slug)
      .then((data) => {
        if (data.success) {
          this._updatePostDates(data.post);
          return data.post;
        }

        return null;
      });
  }

  _updatePostDates(post) {
    this.postDates.push({
      date: this.formatDate(post.get('publishDate')),
      slug: post.get('uid')
    });

    this.postDates.sort((a, b) => {
      return a.date > b.date ? -1 : 1;
    });

    if (25 < this.postDates.length) {
      this.postDates = this.postDates.slice(0, 25);
    }
  }

  formatDate(date) {
    return format(date, "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'");
  }
}

module.exports = BlogCache;
