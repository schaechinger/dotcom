'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const Cache = require('./cache/Cache');
const Rss = require('./Feed/Rss');

let app = express();

const blogCache = Cache.getCache('blog');
const assetsCache = Cache.getCache('assets');
const rssFeed = new Rss();

app.use(express.static(path.resolve(__dirname, '../../public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// GET

app.get('/blog/feed-rss.xml', (req, res) => {
  res.redirect('/de/blog/feed-rss');
});

app.get('/:lang([a-z]{2})/blog/feed-rss', (req, res) => {
  blogCache.getPostsForFeed(req.params.lang)
    .then((posts) => {
      res.setHeader('Content-Type', 'application/xml');
      res.send(rssFeed.generate(posts))
        .end();
    });
});

app.get('/:lang([a-z]{2})?/blog/:slug', (req, res) => {
  blogCache.get(req.params.slug)
    .then((post) => {
      let options = {};
      
      if (post) {
        options.meta = blogCache.buildMeta(post);
        options.links = blogCache.buildLink(post);
      }

      render(res, options);
    });
});

app.get('*', (req, res) => {
  render(res);
});

const render = (res, options = {}) => {
  assetsCache.get('app')
    .then((hash) => {
      if ('app' !== hash) {
        options.chunkHashes = {
          app: hash
        };
      }

      res.render('index', options);
    });
};

// POST

app.use(bodyParser.json());
app.post('/update/:type', (req, res) => {
  switch (req.params.type) {
    case 'blog':
      const data = req.body;
      const secret = 'Wo7LWc>gQmzf8+';

      if (data && 'schchngr' === data.domain && secret === data.secret) {
        blogCache.reset();
      }
      break;

    case 'src':
      break;

    default:
      res.status(404).end();
      return;
  }

  res.status(200).end();
});

module.exports = app;
