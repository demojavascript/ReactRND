const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const browserConfig = {
  entry: './browser/index.js',
  output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
  },

  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  cacheDirectory: true,
                  presets: ['es2015', 'react']
              }
          }
      ]
  }
};
const serverConfig = {
  entry: "./server/index.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "server.js",
      libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /js$/,
          exclude: /(node_modules)/,
          loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
        }
      ]
    }
};
module.exports = [browserConfig, serverConfig];
