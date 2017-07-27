var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

var usercount = 0;

app.use(express.static(__dirname + '/node_modules'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});
app.get('/users', function(req, res,next) {  
    res.sendFile(__dirname + '/users.html');
});

io.on('connection', function(client) {  
    console.log('Client connected...');

    //client.emit('message', "data 1");
    client.broadcast.emit('message', "this is a test");
    //client.broadcast.emit('message',"data 2");
    client.on('join', function(data) {
    	usercount++;
        console.log(usercount);
    });
    client.on('unjoin', function (data) {
    	--usercount;
    	console.log("user gone........."+usercount);
  	});
  	client.on('updatePlayer', function(updatePlayer){
	  console.log("Someone just moved on the map!")
	  io.sockets.emit("updatePlayer", "sdfsdf"); // will trigger the client side function
	});
});

server.listen(4200); 