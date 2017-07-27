const path = require('path');
const SRC = path.resolve(__dirname, 'app');
const BUILD = path.resolve(__dirname, 'build');

module.exports = {
  context: SRC,
  target: 'web',

  entry: SRC+'/index.js',
  output: {
      path: BUILD,
      filename: 'app.js',
      publicPath: '/'
  },
  resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['*', '.js', '.json']
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query:{
                presets:["react", "es2015", "stage-2"]
              }
          },
          {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
          },
          {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
          },
          {
            test: /\.jpg$/,
            loader: "file-loader"
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
          }
      ]
  },
  devtool: 'source-map'
}
