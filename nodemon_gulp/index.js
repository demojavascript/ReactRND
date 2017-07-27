var express = require('express');
var path    = require('path');
var app     = express();

app.use(express.static(path.join(__dirname,"public/dist")));;
app.get("/", function(req, res){
	res.sendFile("public/dist/index.html");
	console.log(787009870699);
});

app.listen(3000, function(){
	console.log("start..."+98798);
}); 