require("dotenv").config();
const { Telegraf } = require("telegraf");
const { commands } = require("./commands");

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Available commands\n /start to start something"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears(new RegExp(".*"), (ctx) => {
  const input = ctx.match.input.toLowerCase();
  if (commands[input]) {
    ctx.reply(commands[input](input));
  }
});

bot.launch();
