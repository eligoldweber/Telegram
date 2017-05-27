var TelegramBot = require('node-telegram-bot-api');

var token = '331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg';

var opt = {polling: true};
var bot = new TelegramBot(token, opt);

bot.on('message', function(msg){
	console.log(msg);
	var id = msg.chat.id;
	
	var echo = msg.text;
	
	bot.sendMessage(id, echo);
});
