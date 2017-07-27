var express = require('express');  
var app     = express();  
var server  = require('http').createServer(app);  
var io      = require('socket.io')(server);

var usercount = 0;

app.use(express.static(__dirname + '/node_modules'));  

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

app.get('/users', function(req, res,next) {  
    res.sendFile(__dirname + '/users.html');
});

io.on('connection', function(client) {      
	//var clientIpAddress = client.request.headers['x-forwarded-for'] || client.request.connection.remoteAddress;
	//console.log(clientIpAddress);
    client.on('join', function(data) {
    	++usercount;
        console.log(data);
        client.emit('broad', usercount);
        client.broadcast.emit('broad',usercount);
    });
    client.on('adminjoin', function(data) {
    	console.log('admin joined....');
        client.emit('broad', usercount);
        client.broadcast.emit('broad',usercount);
    });
    client.on('unjoin', function (data) {
    	--usercount;
        client.emit('broad', usercount);
        client.broadcast.emit('broad',usercount);
  	});
});

server.listen(4200); 