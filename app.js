'use strict'

var express = require('express');
var telegram = require('telegram-node-bot');
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

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
    )