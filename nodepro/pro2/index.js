var app = require('http');
var user = require("./Area.js");
var test = require("./Test.js");
var mongoose = require('mongoose');

//var db = mongoose.createConnection('localhost', 'Students');

var kittySchema = mongoose.Schema({
	_id:String,
    name: String
});

var Kitten = mongoose.model('movie', kittySchema);

mongoose.connect('mongodb://localhost/Students');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
  		console.log(kittens);
	})
});
app.createServer(function(req, res){
	//res.write('dsfs');
	res.write(test.error());
	res.end();
}).listen(3000, function(){
	console.log('running..');
});