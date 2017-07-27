var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./App/index.js",
  debug: true,
  devtool: "#eval-source-map",
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
    path: __dirname+"/dev",
    filename: "bundle.js"
  },
  resolve: {
    root: [path.resolve('App')]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /style.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      title: 'Test App',
      filename: 'index.html'
    })
  ]
};
