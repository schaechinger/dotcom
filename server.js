'use strict';

const http = require('http');
const app = require('./src/website/app');

const environment = process.env.NODE_ENV || 'development';
const config = require('./config/' + environment);
const port = config.port || 1993;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('schaechinger.com rocking port ' + port);
});
