const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.ALERT_CHAT_ID;

const bot = new TelegramBot(token);

const sendMessage = (message) => {
    return bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
}

module.exports = { sendMessage };
