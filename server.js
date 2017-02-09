// temp dev server until webpack has been configured

'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const environment = process.env.NODE_ENV || 'development';
let config = require('./config/' + environment);
let isProduction = ('production' === environment);

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('port', config.port || 1993);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), () => {
  console.log('schaechinger.com running on port ' + app.get('port'));
});
