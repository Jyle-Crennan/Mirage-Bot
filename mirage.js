const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '?';

bot.login(process.env.BOT_TOKEN);

bot.on('ready', () => {
  console.log('Mirage is online and ready to help!');
});

bot.on('ready', () => {
  bot.user.setGame('Destiny 3');
});

bot.on('message', msg => {
  if (msg.content === '?hey') {
    msg.delete();
    msg.channel.send('Eyes up!');
  }
});



//N-word filtering

bot.on('message', msg => {
  
  let blacklist = new Array('Nigger', 'Nigga', 'Nogger', 'Nogga', 'Nagger', 'Nagga', 'Nugger', 'Nugga', 'Negger', 'Negga', 'Nikker', 'Nikka', 'Nixxer', 'Nixxa', 'N1g', 'Nig'); //list of n-bombs
  
  let except = 'Night';
  
  let foundInText = false; //default text in messages (i.e. not an n-bomb)
  
  for (var i in blacklist) { //goes through each n-bomb in the list
    
    if (msg.content.toLowerCase().includes(blacklist[i].toLowerCase())) //if the message has one in it
      
      foundInText = true; //n-bomb confirmed
    
  }
  
  if (msg.content.toLowerCase().includes(except.toLowerCase()))
    
    return;
  
  else if (foundInText) { //if n-bomb confirmed
    
    msg.delete(); //gets rid of n-bomb message
    
    msg.reply("Yikes! Let's not do that!"); //profit
    
  }
  
});


//Clan info page (?about)

bot.on('message', msg => {
  
  var about = new Discord.RichEmbed()
  
    .setTitle('About Us')
    .addField('Who We Are', 'Eyes up Guardians, welcome to The Black Mirage! We strive to create a lasting hardcore Destiny clan with no skill-gap, whose members can be relied on to join any activity and complete it with ease (or at least hold their own at all cost as others fail). Our knowledge and skill will be superior to all we encounter. That is the mission, and I’m VERY happy to have you on board. Thank you for your support and your belief in this idea, keep killing it!')
    .addField('Requirements', '- Be active at a minimum once every 2 weeks\n- Achieve at least **Diamond V** in **Speed** on raid.report\n- Meet all of the speed requirements (*see below*)\n- Achieve at least **Platinum III** in **Full Clears** on raid.report\n- Have **10+ full clears** of the following raids: **LW, SotP, CoS, GoS**\n- Have a minimum of **one Flawless raid** completion of your choice')
    .addField('*Speed Requirements*', '*Leviathan <= 40 minutes*\n*Eater of Worlds <= 35 minutes*\n*Spire of Stars <= 45 minutes*')
    .addField('__Clan Admins__', '**angrywalrus7 (owner)**\nAsashin\nBdunn02\nRTTC virulent\nTheBsBSound', true)
    .addField('__Server Staff__', '**angrywalrus7 (owner)**\nAsashin\nJy1e', true)
    .setColor(0x58ffe2)
    .setThumbnail(bot.user.avatarURL)
    .setFooter("[Note: Any questions about Mirage Ghost should go to @Jy1e]");
  
    if (msg.content === '?about') {
      
      msg.delete();
      
      msg.channel.send(about);
      
    }
  
});


//Raid clear ranks (?clearranks)

bot.on('message', msg => {
  
  const clears = new Discord.RichEmbed()
  
    .setTitle('Server Raid Ranks (Clears)')
    .addField('__Master__', '100+ clears', true)
    .addField('__Expert__', '50-99 clears', true)
    .addField('__Advanced__', '25-49 clears', true)
    .addField('__Intermediate__', '10-24 clears', true)
    .addField('__Beginner__', '0-9 clears', true)
    .setColor(0x58ffe2)
    .setThumbnail('https://safeboost.net/wp-content/uploads/2019/04/raids-destiny-2.png')
    .setFooter('***All ranks are subject to change if need be');
  
  if (msg.content === '?clearranks') {
    
    msg.delete();
    
    msg.channel.send(clears);
    
  }
  
});


//Raid speed ranks (?speedranks)

bot.on('message', msg => {
  
  const speeds = new Discord.RichEmbed()
  
    .setTitle('Server Raid Ranks (Speeds)')
    .addField('__Leviathan__', 'Master: 20 min\nExpert: 25 min\nAdvanced: 30 min\nIntermediate: 35 min\nBeginner: >35 min', true)
    .addField('__Eater of Worlds__', 'Master: 20 min\nExpert: 25 min\nAdvanced: 30 min\nIntermediate: 35 min\nBeginner: >35 min', true)
    .addField('__Spire of Stars__', 'Master: 20 min\nExpert: 25 min\nAdvanced: 30 min\nIntermediate: 35 min\nBeginner: >35 min', true)
    .addField('__Last Wish__', 'Master: 10 min\nExpert: 15 min\nAdvanced: 20 min\nIntermediate: 25 min\nBeginner: >25 min', true)
    .addField('__Scourge of the Past__', 'Master: 10 min\nExpert: 15 min\nAdvanced: 20 min\nIntermediate: 25 min\nBeginner: >25 min', true)
    .addField('__Crown of Sorrow__', 'Master: 20 min\nExpert: 25 min\nAdvanced: 30 min\nIntermediate: 35 min\nBeginner: >35 min', true)
    .addField('__Garden of Salvation__', 'Master: 25 min\nExpert: 30 min\nAdvanced: 35 min\nIntermediate: 40 min\nBeginner: >40 min', true)
    .setColor(0x58ffe2)
    .setThumbnail('https://safeboost.net/wp-content/uploads/2019/04/raids-destiny-2.png')
    .setFooter('***All ranks are subject to change if need be');
  
  if (msg.content === '?speedranks') {
    
    msg.delete();
    
    msg.channel.send(speeds);
    
  }
  
});


//Command list (?help)

bot.on('message', msg => {
  
  const helplist = new Discord.RichEmbed()
  
    .setTitle('Command List')
    .setColor(0x58ffe2)
    .addField("**?about**", "> View the clan's mission statement, in-game requirements in order to join, and the higher-ups in charge of everything. You can see more information not listed in the 'rules-and-regs' and 'announcements' chats.")
    .addField("**?poll [question]**", "> Set up a yes or no answer questionairre for members to submit their response to as a vote in the form of reactions. To use properly, type your question after the command in the same message.")
    .addField("**?clearranks**", "> View all of the required raid completions needed for each level of the server's ranking system. Higher ranks show more total clears in a particular raid.")
    .addField("**?speedranks**", "> View all of the required raid time trials needed for each level of the server's ranking system. Higher ranks show faster times for a full clear in a particular raid.")
    .addField("**?help**", "> You're already looking at the command list, but if you didn't know, this command takes you to this very message. All of the commands that Mirage Ghost follows are listed here.")
    .addField("**?metas**", "> View all of the best loadouts for each raid boss in the game, which includes the Supers, weapons, Exotics, and mods for each member to have the most ideal run for easy clears.")
    .setThumbnail(bot.user.avatarURL)
    .setFooter('[If a command listed says it is coming soon, it does not work and will be implemeted at a later date. Thank you for your patience. ~Jy1e]');
  
  if (msg.content === '?help') {
    
    msg.delete();
    
    msg.channel.send(helplist);
    
  }
  
});


//Raid boss loadouts (?metas)

bot.on('message', msg => {
  
  const metas = new Discord.RichEmbed()
  
    .setTitle('Raid Boss Loadouts [Destiny 2]')
    .setColor(0x58ffe2)
    .addField("__Emperor Calus__ (Levi)", "- 1x Divinity\n- 5x Izanagi's + 150-rpm Spike GLs\n- Striking Hand\n- 1x Well of Radiance w/ Luna & Emperor's Blaze")
    .addField("__Argos__ (EoW)", "- 5x Triple Tap w/ Firing Line Snipers + Anarchy\n- Striking Hand\n- 1x Shadowshot (tether the tail)\n- 4x Golden Guns w/ Celestial & Emperor's Blaze\n- 1x Well of Radiance w/ Luna & Emperor's Blaze\n- 1x Ward of Dawn")
    .addField("__Val Ca'uor__ (SoS)", "- 5x Wardcliff\n- 1x Shadowshot\n- 1x Well of Radiance w/ Luna & Emperor's Blaze")
    .addField("__Kalli, the Corrpupted__ (LW)", "- 1x Divinity\n- 5x Izanagis + 150-rpm Spike GLs\n- 5x Trancendent Blessings (per player)\n- 1x Well of Radiance w/ Luna & Emperor's Blaze\n- 1x Ward of Dawn")
    .addField("__Shuro Chi, the Corrupted__ (LW)", "- ?x Izanagis/Lord of Wolves/Whisper\n- 1x Well of Radiance w/ Luna\n- 5x Trancendent Blessings (per player)\n- Nova Bombs AND/OR Celestial Golden Guns")
    .addField("__Morgeth, the Spirekeeper__ (LW)", "- Anything that deals damage\n- Well of Radiance?? (just cuz)")
    .addField("__Riven of a Thousand Voices__ (LW)", "- 1x Tractor Cannon\n- 5x Jagged Edge w/ Whirlwind Blade Swords\n- 5x Trancendent Blessings (per player)\n- 1x Well of Radiance\n- 1x Ward of Dawn")
    .addField("__Insurrection Prime, Kell's Scourge__ (SotP)", "- 1x Tractor Cannon\n- 3x Well of Radiance (C-A-P)\n- 5x Whisper of the Worm (more consistent) OR\n- 5x Izanagi's (faster speed)")
    .addField("__Gahlran's Deception__ (CoS)", "- 1x Tractor Cannon\n- 5x Whirlwind Swords OR\n- Anarchy + Shotguns OR\n- Izanagi's + GLs\n- Striking Hand\n- 1x Well of Radiance w/ Luna & Emperor's Blaze\n- 1x Ward of Dawn")
    .addField("__Gahlran, the Sorrow-Bearer__ (CoS)", "- 1x Tractor Cannon\n- 5x Izanagi's + GLs (speed) OR\n 5x Legend of Acrius (#acriusbake2020)\n- Striking Hand\n- 3x Golden Guns w/ Celestial & Emperor's Blaze\n- 1x Well of Radiance w/ Luna & Emperor's Blaze\n- 1x Ward of Dawn")
    .addField("__Consecrated Mind, Sol Inherent__ (GoS)", "- 1x Tractor Cannon OR Shadowshot\n- 5x Izanagi's + GLs\n- 2x Well of Radiance w/ Luna\n- 1x Ward of Dawn")
    .addField("__Sanctified Mind, Sol Inherent__ (GoS)", "- 6x Izanagi's + GLs\n- 5x Enhanced Relay Defender (per person)\n- 1x Shadowshot\n- 1x Well of Radiance w/ Luna\n- 1x Ward of Dawn")
    .setFooter('[Thanks you very much to @Floatz for this great information!]');
  
  if (msg.content === '?metas') {
    
    msg.delete();
    
    msg.channel.send(metas);
    
  }
  
});


//Polling function (?poll [question])

bot.on('message', msg => {
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  
  const command = args.shift().toLowerCase();
  
  if (!msg.content.startsWith(prefix) || msg.author.bot)
    
    return;
  
  else if (command === 'poll') {
    
    if (!args[0])
      
      msg.reply('Please include a question in your poll.');
    
    else {
      
      const poll = new Discord.RichEmbed()
      
        .setColor(0x58ffe2)
        .setFooter('React to vote. Please do not add more reactions to the poll.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created by ${msg.author.username}`);
      
      msg.channel.send(poll)
      
        .then((newMessage) => {
          newMessage.react('✅')
          .then(newMessage.react('⛔'))
        
        });
      
      msg.delete({timeout: 1000});
      
    }
    
  }
  
});



