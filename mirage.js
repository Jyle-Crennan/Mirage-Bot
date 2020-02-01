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
  let blacklist = new Array('Nigger', 'Nigga', 'Nogger', 'Nogga', 'Nagger', 'Nagga', 'Nugger', 'Nugga', 'Negger', 'Negga', 'Nikker', 'Nikka', 'Nixxer', 'Nixxa', 'N1g', 'Nig ', ' Nig'); //list of n-bombs
  let foundInText = false; //default text in messages (i.e. not an n-bomb)
  let caught = false;
  for (var i in blacklist) { //goes through each n-bomb in the list
    if (msg.content.toLowerCase().includes(blacklist[i].toLowerCase())) //if the message has one in it
      foundInText = true; //n-bomb confirmed
    else if (msg.content.toLowerCase() === 'nig')
      caught = true;
  }
  if (foundInText) { //if n-bomb confirmed
    msg.delete(); //gets rid of n-bomb message
    msg.reply("Yikes! Let's not do that!"); //profit
  }
  else if (caught) {
    msg.delete();
    msg.reply("Whoops! Nice try tho, idiot!");
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

bot.on('message', msg => {
  var ranks = new Discord.RichEmbed()
    .setTitle('Server Raid Ranks')
    .addField('__Master__', '100+ clears', true)
    .addField('__Expert__', '50-99 clears', true)
    .addField('__Advanced__', '25-49 clears', true)
    .addField('__Intermediate__', '10-24 clears', true)
    .addField('__Beginner__', '0-9 clears', true)
    .setColor(0x58ffe2)
    .setThumbnail('https://safeboost.net/wp-content/uploads/2019/04/raids-destiny-2.png')
    .setFooter('***All ranks are subject to change if need be')
    if (msg.content === '?ranks') {
      msg.delete();
      msg.channel.send(ranks);
    }
});

bot.on('message', msg => {
  if (msg.content.startsWith('?poll') {
    if (!msg.member.hasPermission('ADMINISTRATOR')) {
      msg.delete(3000);
      msg.channel.send('This action requires permission: ADMINISTRATOR');
    }
    else {
      var polls = new Discord.RichEmbed()
        .setTitle('Poll created by' + msg.author.username)
        .setColor(0x58ffe2)
        .setDescription('This is a yes or no survey test.')
        .setFooter('React to vote.');
      msg.delete();
      msg.channel.send(polls);
      msg.react('✅');
      msg.react('❎');
    }
  }
});
