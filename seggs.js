const {Telegraf} = require("telegraf");
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx)=>{
    ctx.reply("Supp ** addict !😏");
});
bot.command('hello',(ctx)=>{
    ctx.reply("Hey man, How's life 😁, keep ** pal.");
});
bot.on('sticker',(ctx)=>{
    ctx.reply("Okay weirdo 😍");
})
bot.command('iloveyou',(ctx)=>{
    ctx.reply("Just like your mother, I don't love you. 🙄");
})
bot.command('haha',(ctx)=>{
    ctx.reply("Go ** a rat, disgusting mosquito 😣");
})
bot.command('yolo',(ctx)=>{
    ctx.reply("Why search for something you never gonna find? 😥");
})
bot.command('ohno',(ctx)=>{
    ctx.reply("Ma man wants to ** something **? Suck your **, **! 🤗");
})
bot.command('never',(ctx)=>{
    ctx.reply("You will ** in deepest point of **. 🤢");
})
bot.command('girl',(ctx)=>{
    ctx.reply("If your name rhymes with **, you are loved by **. 🙂");
})
bot.command('cat',(ctx)=>{
    ctx.reply('Get a cat to massage , atleast it wont run, lol. 😂');
})

bot.command('nvm',(ctx)=>{
    ctx.reply('Man, still hurts to know that ** ** ** before me. 😂');
})
bot.command('quit',(ctx)=>{
    ctx.reply('Bye **! 👋');
})
bot.launch();
