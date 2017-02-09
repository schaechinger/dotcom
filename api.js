const bodyParser = require('body-parser');
const express = require('express');

const environment = process.env.NODE_ENV || 'development';

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', 1993);

app.get('/callbacks/:type', function (req, res) {
  console.log('req callbacks', req.params);
  let data = {
    success: true,
    area: 'callbacks'
  };
  
  res.json(data);
});

app.get('/api/*', function (req, res) {
  console.log('api');
  let data = {
    success: true,
    area: 'api'
  };
  
  res.json(data);
});

app.listen(app.get('port'), () => {
  console.log('schaechinger.com api running on port ' + app.get('port'));
});
