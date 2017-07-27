var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./App/index.js",
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.(scss$|css)/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test : /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[ext]"
      },
      {
        test: /\.(eot|ttf|svg)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json-loader?name=json/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader?name=[name].[ext]',
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }],
      }
    ]
  },
  output: {
    path: __dirname+"/prod",
    filename: "bundle.js"
  },
  resolve: {
    root: [path.resolve('App')]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(), //dedupe similar code
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks,
    new HtmlWebpackPlugin({
      title: 'Test App',
      filename: 'index.html'
    })
  ]
};
