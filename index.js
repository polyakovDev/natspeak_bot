//process.env["NTBA_FIX_319"] = 1; // fix for: node-telegram-bot-api
const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');

var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const bot = new TelegramBot(config.token, {polling: true});

bot.on('message', msg => {
    console.log(msg);
    bot.sendMessage(msg.chat.id, `Hello dear ${msg.from.first_name}, you are welcome!`);
});


