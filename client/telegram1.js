

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '0e2b809d',
  apiSecret: 'f12d2fc77a8b42cd'
});

var TelegramBot = require('node-telegram-bot-api');

var token = '331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg';

var opt = {polling: true};
var bot = new TelegramBot(token, opt);

bot.on('message', function(msg){
	console.log(msg);
	var id = msg.chat.id;
	
	var echo = msg.text;
	
	switch(echo){
		case '/test':
			bot.sendMessage(id, echo);
			break;
		case '/text_msg':
			nexmo.message.sendSms(
			  '12034568758', '15136935944', 'yo \n',
			    (err, responseData) => {
			      if (err) {
			        console.log(err);
					//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
			      } else {
			        console.dir(responseData);
			      }
			    }
			 );
			 break;
		 default:
			bot.sendMessage(id, "you smell");
			break;
	}
	
	
	

});
