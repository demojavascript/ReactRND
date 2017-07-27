var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors       = require('cors');
mongoose.connect('mongodb://localhost/BearDB'); 

var corsOptions = {
  origin: 'http://localhost:3000'
}
var issuesoption = {
  origin: true,
  methods: ['PUT'],
  credentials: true,
};
app.use(cors(corsOptions))
app.options('*', cors(issuesoption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080; 
var router = express.Router();

require('./route.js')(router); 
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);