var webpack = require('webpack');
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
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test : /\.(png|jpg|jpeg|gif)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json-loader?name=json/[name].[ext]'
      }
    ]
  },
  output: {
    path: __dirname+"/build",
    filename: "bundle.js"
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /style.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ]
};
