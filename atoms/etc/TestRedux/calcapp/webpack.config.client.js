const path = require('path');
const srcPath = path.resolve(__dirname, 'dev');
const distPath = path.resolve(__dirname, 'app');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: srcPath+'/index.js',
    output: {
        path: distPath,
        filename: 'client.js',
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
            }
        ]
    },
    devtool: 'source-map'
};
