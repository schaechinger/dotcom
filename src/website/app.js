'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const Cache = require('./cache/Cache');
const Rss = require('./Feed/Rss');

let app = express();

const blogCache = Cache.getCache('blog');
const rssFeed = new Rss();

app.use(express.static(path.resolve(__dirname, '../../public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

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

      res.render('index', options);

      /*loadAppChunks((chunkHashes) => {
        res.render('index', options);
      });*/
    });
});

app.get('*', (req, res) => {
  // TODO: enable caching

  res.render('index');
  
  /*loadAppChunks((chunkHashes) => {
    res.render('index', { chunkHashes });
  });*/
});

const loadAppChunks = (callback) => {
  const dir = path.resolve(__dirname, '../../public/assets/js');

  fs.readdir(dir, (err, files) => {
    let hashes = {};
    files.forEach(file => {
      let parts = file.match(/^([a-z]+)-([0-9a-f]+)/i);
      if (parts && 3 === parts.length) {
        hashes[parts[1]] = parts[2];
      }
    });

    callback(hashes);
  });
}

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
