var express   = require('express');
var mongoose  = require ("mongoose");
var PUser     = require ("./PowerUsers");
var app       = express();
var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/Users';


//var PUser = mongoose.model('PowerUsers', PowerUsers);

mongoose.connect(uristring, function (err, res) {
  if (err) {
  	console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  	console.log ('Succeeded connected to: ' + uristring);
  	var johndoe = new PUser ({
      name: 'John2',
      age: '252'
    });
	/*johndoe.save(function (err) {
		if (err) {
			console.log ('Error on save!')
		}else{
			console.log ('Done!')
		}
	});*/
	PUser.find({}).exec(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("len - "+result.length);
        console.log(result);
      };
    });
  }
});

app.get("/", function(req, res){
	res.write("jksfk ajsdf");
	res.end();
});

app.listen(3001, function(){
	console.log('started...');
}) 


