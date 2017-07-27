import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App';
import template from '../shared/template';
import { StaticRouter as Router, matchPath } from 'react-router';


const app = express();
app.get('*', (req, res) => {
  var html = ReactDOMServer.renderToString(<App />);
  res.send(template({
    body: html
  }));
});

const port = 3000;
app.listen(port, function(){
	console.log(`Listening on port ${port}`);
});
