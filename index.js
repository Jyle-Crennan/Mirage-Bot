const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.NjcyMjE0MjA2Njk4ODgxMDM0.XjOyiw.2FmUQKol_Ek7iL3W2buCgfc0wtk);

bot.on('ready', () => {
  console.log('Mirage is online and ready to help!');
});

bot.on('message', msg => {
  if (msg.content === '?hey')
    msg.reply('Hello world!')
});

bot.on('message', msg => {
  let blacklist = new Array('Nigger', 'Nigga', 'Nogger','Nagger', 'Nugger', 'Negger', 'Nig', 'Nikker', 'Nixxer');
  let foundInText = false;
  for (var i in blacklist) {
    if (msg.content.toLowerCase().includes(blacklist[i].toLowerCase()))
      foundInText = true;
  }
  if (foundInText) {
    msg.delete();
    msg.reply('Whoops! Try again, dumbass!');
  }
});