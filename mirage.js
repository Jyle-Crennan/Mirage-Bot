const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.on('ready', () => {
  console.log('Mirage is online and ready to help!');
});

bot.on('message', msg => {
  if (msg.content === '?hey') {
    msg.delete();
    msg.channel.send('Eyes up!');
  }
});

bot.on('message', msg => {
  let blacklist = new Array('Nigger', 'Nigga', 'Nogger','Nagger', 'Nugger', 'Negger', 'Nig', 'Nikker', 'Nixxer'); //list of n-bombs
  let foundInText = false; //default text in messages (i.e. not an n-bomb)
  for (var i in blacklist) { //goes through each n-bomb in the list
    if (msg.content.toLowerCase().includes(blacklist[i].toLowerCase())) //if the message has one in it
      foundInText = true; //n-bomb confirmed
  }
  if (foundInText) { //if n-bomb confirmed
    msg.delete(); //gets rid of n-bomb message
    msg.reply('Whoops! Try again, dumbass!'); //profit
  }
});

bot.on('message', msg => {
  var about = new Discord.RichEmbed()
    .setTitle('About Us')
    .addField('Who We Are', 'Eyes up Guardians, welcome to The Black Mirage! We strive to create a lasting hardcore Destiny clan with no skill-gap, whose members can be relied on to join any activity and complete it with ease (or at least hold their own at all cost as others fail). Our knowledge and skill will be superior to all we encounter. That is the mission, and I’m VERY happy to have you on board. Thank you for your support and your belief in this idea, keep killing it!')
    .addField('Requirements', '- Be active at a minimum once every 2 weeks\n- Achieve at least **Diamond V** in **Speed** on raid.report\n- Meet all of the speed requirements (*see below*)\n- Achieve at least **Platinum III** in **Full Clears** on raid.report\n- Have **10+ full clears** of the following raids: **LW, SotP, CoS, GoS**\n- Have a minimum of **one Flawless raid** completion of your choice')
    .addField('*Speed Requirements*', '*Leviathan <= 40 minutes*\n*Eater of Worlds <= 35 minutes*\n*Spire of Stars <= 45 minutes*')
    .setColor(0x58ffe2)
    .setThumbnail(bot.user.avatarURL)
    .setFooter('Always remember to keep killing it out there, Guardian!')
    if (msg.content === '?about') {
      msg.delete();
      msg.channel.send(about);
    }
});
