

var TelegramBot = require('node-telegram-bot-api');

var token = '331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg';

var opt = {polling: true};
var bot = new TelegramBot(token, opt);

bot.on('message', function(msg){
	console.log(msg);
	var id = msg.chat.id;
	
	var echo = msg.text;
	
	bot.sendMessage(id, echo);
	const Nexmo = require('nexmo');
	const nexmo = new Nexmo({
	  apiKey: '0e2b809d',
	  apiSecret: 'f12d2fc77a8b42cd'
	});
	nexmo.message.sendSms(
	  '12034568758', '15136935944', 'yo',
	    (err, responseData) => {
	      if (err) {
	        console.log(err);
			//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	      } else {
	        console.dir(responseData);
	      }
	    }
	 );

});
