var path = require('path');
var webpack = require('webpack');

function isExternal(module) {
  var userRequest = module.userRequest;

  if (typeof userRequest !== 'string') {
    return false;
  }

  return 0 <= userRequest.indexOf('node_modules');
}

var entry = {
  app: path.join(__dirname, 'src', 'react', 'index.js')
};

var config = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src', 'react'),
          path.join(__dirname, 'src', 'shared'),
        ],
        test: /\.jsx?$/,
        query: {
//          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  entry,
  output: {
    path: path.join(__dirname, 'public', 'assets', 'js'),
    filename: '[name].min.js'
  },
  plugins: [
  ]
};

if (-1 !== process.argv.indexOf('-p')) {
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  };

  // TODO: clear assets dir

  config.output.filename = '[name].[chunkhash].min.js';

  config.plugins = config.plugins || [];
  /*config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );*/
}

module.exports = config;
