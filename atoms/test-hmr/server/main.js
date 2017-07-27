import express from 'express';
import React from "react";
import { renderToString } from "react-dom/server";
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import App from "../src/App";

const app = express();
const port = 3000;
const devPort = 3001;


if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
//app.use('*', express.static(__dirname + '/../public'));
app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
