var app = require('http');

app.createServer(function(req, res){
  res.write("jhfgasjdf asd");
  console.log(req);
  res.end();
}).listen(8080, function(){
	console.log('started......');
});