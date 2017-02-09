var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src/react'),
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
  output: {
    path: './public/assets/js',
    filename: 'app.min.js'
  },
  entry: {
    app: './src/react/index.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({sourceMap:0})
  ]
};
