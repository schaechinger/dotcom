'use strict';

//const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();

//app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', (req, res) => {
  // TODO: enable caching
  
  loadAppChunks((chunkHashes) => {
    res.render('index', { chunkHashes });
  });
});

const loadAppChunks = (callback) => {
  const dir = path.resolve(__dirname, '..', '..', 'public', 'assets', 'js');

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

module.exports = app;
