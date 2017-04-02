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
    /*new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: function(module, count) {
        return !isExternal(module);
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      //chunks: ['common'],
      // or if you have an key value object for your entries
      chunks: Object.keys(entry).concat('common'),
      minChunks: function(module) {
        return isExternal(module);
      }
    })*/
    //new webpack.optimize.UglifyJsPlugin({sourceMap:0})
  ]
};

if (-1 !== process.argv.indexOf('-p')) {
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  };

  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );
}

module.exports = config;
