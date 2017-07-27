var express = require('express');
var path    = require('path');
var app     = express();

app.use(express.static(path.join(__dirname,"app/dist")));
app.get("*", function(req, res){
	req.send("sfasdf");
});

app.listen(3000, function(){
	console.log("start..."+98798);
}); 