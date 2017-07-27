import express from 'express';
import React from 'react';
import App from '../shared/App';
//import { StaticRouter as Router, matchPath } from 'react-router';
import { StaticRouter as Router, matchPath } from 'react-router-dom';
import sourceMapSupport from 'source-map-support';
import render from './render';
import fetch from 'node-fetch';

var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors       = require('cors');

const routes = [
    '/'
];

sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));
app.route("/")

app.get('*', (req, res, next) => {
  console.log(req.path);
    if(req.path.indexOf("/api/") != -1){
      next();
    }else{
        const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
        if (!match) {
            res.status(404).send(render(<NoMatch />));
            return;
        }else{
          res.status(200).send(render(
              (
                  <Router context={{}} location={req.url}>
                    <App />
                  </Router>
              )
          ));
        }
    }
});

mongoose.connect('mongodb://localhost/banadb');

var corsOptions = {
  origin: 'http://localhost:3001'
}
var issuesoption = {
  origin: true,
  methods: ['PUT'],
  credentials: true,
};
//app.use(cors(corsOptions))
app.options('*', cors(issuesoption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

require('./route.js')(router);
app.use('/api', router);

app.listen(3000, () => console.log('Demo app df sdflistening on port 3000'));
