var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/index.html');
});

app.get('/test',function(req,res){
	res.sendFile(__dirname + '/client/test.html');
});


app.get('/telegram1',function(req,res){
	res.sendFile(__dirname + '/client/telegram1.html');
});

app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT || 2000);


console.log("hello world");