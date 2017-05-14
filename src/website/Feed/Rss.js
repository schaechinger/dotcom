const format = require('dateformat');
const xml = require('xml');

class RSS {
  constructor() {
    this.attributes = {}
    this.channel = [];
    this.items = [];

    this.init();
  }

  generate(posts) {
    this.buildChannel(posts[0]);
    this.buildItems(posts);

    let channel = this.channel.slice();

    this.items.forEach((item) => {
      channel.push(
        { item }
      );
    });

    return xml(
      [
        {
          rss: [
            this.attributes,
            { channel }
          ]
        }
      ],
      { declaration: true }
    );
  }

  init() {
    this.attributes = {
      _attr: {
        version: '2.0',
        'xmlns:atom': 'http://www.w3.org/2005/Atom',
	      'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
        'xmlns:sy': 'http://purl.org/rss/1.0/modules/syndication/',
      }
    };

    this.channel = [
      { title: 'schaechinger.com' },
      {
        'atom:link': {
          _attr: {
            href: 'https://www.schaechinger.com/de/blog/feed-rss',
            rel: 'self',
            type: 'application/rss+xml'
          }
        }
      },
      { link: 'https://www.schaechinger.com/blog' },
      {
        description: {
          _cdata: 'In meinem Blog dreht sich alles um Laufen, Reisen und Webentwicklung mit JavaScript und Node.js.'
        }
      },
      { language: 'de-de' },
      {
        image: [
          { title: 'schaechinger.com' },
          { url: 'https://www.schaechinger.com/img/schaechinger-casual.jpg' },
          { link: 'https://www.schaechinger.com/blog' }
        ]
      },
      { copyright: `Copyright ${new Date().getFullYear()} Manuel Schächinger` },
      { 'sy:updatePeriod': 'hourly' },
	    { 'sy:updateFrequency': 1 },
      { pubDate: 'xxx' }
    ]
  }

  buildChannel(latest) {
    console.log(latest);
    this.channel[this.channel.length - 1].pubDate = this.formatDate(latest);
  }

  buildItems(posts) {
    this.items = [];

    posts.forEach((post) => {
      const link = `https://schchn.gr/${post.get('sharekey')}`;

      this.items.push([
        { title: post.get('title') },
        {
          description: {
            _cdata: post.get('intro')
          }
        },
        { link },
        { guid: link },
        {
          'dc:creator': {
            _cdata: 'Manuel Schächinger'
          }
        },
        {
          category: {
            _cdata: post.get('tag')
          }
        },
        { pubDate: this.formatDate(post) }
      ]);
    })
  }

  formatDate(post) {
    try {
      return format(post.get('updateDate'), 'UTC:ddd, dd mmm yyyy HH:MM:ss o');
    }
    catch (e) {
      return '';
    }
  }
}

module.exports = RSS;
