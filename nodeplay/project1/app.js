var express = require('express');
var path = require('path');
var app = express();


app.use(express.static('public'))
//app.use(express.static(path.join(__dirname, 'public')))
//app.use('/demo', express.static('public'))
app.get("/", function(req, res){
   res.send("kghdsjkgh");
})
app.get("/about", function(req, res){
   res.send("About Us");
})
app.get('/users/:userId', function (req, res) {
  res.send(req.params)
})
app.get("/dwn", function(req, res){
   res.download('public/app.png');
})

app.listen(3008, function(){
	console.log('running...');
});
