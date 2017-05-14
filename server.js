'use strict';

const http = require('http');
const app = require('./src/website/app');

const config = require('./config/');
const port = config.port;




/* TODO:
 *
 * refactor meta generation with objects
 * add featured img <link rel="image_src" href="">
 * make use of meta generation in frontend
 * generated meta data in react and node should fit
 * generate feeds
 * reset function for cached data and source updates
 * automated source deploy
 * refactor app.js
 */




const server = http.createServer(app);

server.listen(port, () => {
  console.log('schaechinger.com rocking port ' + port);
});
