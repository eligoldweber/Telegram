'use strict'

var express = require('express');
var app = express();
var serv = require('http').Server(app);

var t1 = require("./client/telegram1.js");

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/index.html');
});

app.get('/test',function(req,res){
	res.sendFile(__dirname + '/client/test.html');
});



app.use('/client',express.static(__dirname + '/client'));
serv.listen(process.env.PORT || 2000);


console.log("hello world");

// var TelegramBot = require('node-telegram-bot-api');
//
// var token = '331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg';
//
// var opt = {polling: true};
// var bot = new TelegramBot(token, opt);
//
// bot.on('message', function(msg){
// 	console.log(msg);
// 	var id = msg.chat.id;
//
// 	var echo = msg.text;
//
// 	bot.sendMessage(id, echo);
// });
