const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '?';

bot.login(process.env.BOT_TOKEN);

function catchErr (err, msg) {
	bot.users.get("650590222937227264").send("There was an error at channel " + msg.channel + " in guild " + msg.guild + ".");
	bot.users.get("650590222937227264").send("ERROR ```" + err + "```");
}
	

bot.on('ready', () => {
  console.log('Mirage is online and ready to help!');
});


bot.on('ready', () => {
  bot.user.setGame('Destiny 3');
});


bot.on('message', msg => {
	try {
  if (msg.content === '?hey') {
    msg.delete();
    msg.channel.send('Eyes up!');
  }
	}
	catch (err) {
		catchErr(err, msg); }
});



//Adds rank roles to new members

bot.on('guildMemberAdd', member => {
	
	try {

  var rc = member.guild.roles.find('name', '⁣           Raid Clears');
  
  var rs = member.guild.roles.find('name', '⁣           Raid Speed')
	
  member.addRole(rc);
  
  member.addRole(rs);
		
	bot.users.get("650590222937227264").send(member.username + " has joined the fight as a new member of " + member.guild);
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }

});



//N-word filtering

bot.on('message', msg => {
	
	try {
  
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
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Clan info page (?about)

bot.on('message', msg => {
	
	try {
  
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
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Raid clear ranks (?clearranks)

bot.on('message', msg => {
	
	try {
  
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
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Raid speed ranks (?speedranks)

bot.on('message', msg => {
	
	try {
  
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
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Command list (?help)

bot.on('message', msg => {
	
	try {
  
  const helplist = new Discord.RichEmbed()
  
    .setTitle('Command List')
    .setColor(0x58ffe2)
    .addField("**?about**", "> View the clan's mission statement, in-game requirements in order to join, and the higher-ups in charge of everything. You can see more information not listed in the 'rules-and-regs' and 'announcements' chats.")
    .addField("**?banish [user] [reason]** *(Admin Only)*", "> You REALLY don't want to be on the recieving end of this. It is not a ban, but more of a warning and acts as a way to publicly humiliate fools lmaooo.")
    .addField("**?calc [x] [y] [z]**", "> Serves as a damage calculator that simply takes in a damage value (x), the weapon type (y), and the weapon's fire rate (z) which will return the potential DPS yield for the weapon. Also, a list of other factors will be included, such as Luna Well, applied debuffs, and perks unique to the weapon type.\n[COMING SOON]")
    .addField("**?clearranks**", "> View all of the required raid completions needed for each level of the server's ranking system. Higher ranks show more total clears in a particular raid.")
    .addField("**?help**", "> You're already looking at the command list, but if you didn't know, this command takes you to this very message. All of the commands that Mirage Ghost follows are listed here.")
    .addField("**?hey**", "> This acts as a testing command to see if Mirage Ghost is responsive, or to check if commands will interfere with each other.")
    .addField("**?metas**", "> View all of the best loadouts for each raid boss in the game, which includes the Supers, weapons, Exotics, and mods for each member to have the most ideal run for easy clears.")
    .addField("**?poll [question]** *(Admin Only)*", "> Set up a yes or no answer questionairre for members to submit their response to as a vote in the form of reactions. To use properly, type your question after the command in the same message.")
    .addField("**?speedranks**", "> View all of the required raid time trials needed for each level of the server's ranking system. Higher ranks show faster times for a full clear in a particular raid.")
    .addField("**?[activity]maps**", "> Allows you to view several helpful infographics, such as maps or charts, from raids and dungeons in D2. The latest version of Mirage-Ghost contains the following '[activity]' tags: levi, sotp, lw, pit.")
    .setThumbnail(bot.user.avatarURL)
    .setFooter('[If a command listed says it is coming soon, it does not work and will be implemeted at a later date. Thank you for your patience. ~Jy1e]');
  
  if (msg.content === '?help') {
    
    msg.delete();
    
    msg.channel.send(helplist);
    
  }
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Raid boss loadouts (?metas)

bot.on('message', msg => {
	
	try {
  
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
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Polling function (?poll [question])

bot.on('message', msg => {
	
	try {
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  
  const command = args.shift().toLowerCase();
  
  if (!msg.content.startsWith(prefix) || msg.author.bot)
    
    return;
	
  else if (!msg.member.hasPermission('MANAGE_MESSAGES')) {

    msg.channel.send('This action requires you to be able to have permission: MANAGE_MESSAGES');

    msg.delete();

  }
  
  else if (command === 'poll') {
    
    if (!args[0])
      
      msg.reply('Please include a question in your poll.');
    
    else {
      
      const poll = new Discord.RichEmbed()
      
        .setColor(0x58ffe2)
        .setFooter('React to vote. Please do not add more reactions to the poll.')
        .setDescription(args.join(' '))
        .setThumbnail()
        .setTitle(`Poll Created by ${msg.author.username}`);
      
      msg.channel.send(poll)
      
        .then((newMessage) => {
          newMessage.react('✅')
          .then(newMessage.react('⛔'))
        
        });
      
      msg.delete({timeout: 1000});
      
    }
    
  }
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
  
});



//Banish members to the Shadow Realm role (?banish [user] [reason])

bot.on('message', msg => {
	
	try {

  const args = msg.content.slice(prefix.length).split(/ +/); //takes the message and creates a new string with everything after the prefix. It also splits up the string into an array of substrings.

  const command = args.shift().toLowerCase(); //takes the new array, args, and takes the first item (i.e. 'banish') from the array

  if (!msg.content.startsWith(prefix) || msg.author.bot) //if the message doesn't start with a ?, or is from a bot...

    return; //ignore

  else if (!msg.member.hasPermission('MANAGE_MESSAGES')) {//if the author does not have the ability to manage messages...

    return msg.channel.send('This action requires you to be able to have permission: MANAGE_MESSAGES'); //ignore and tell them to fuck off basically

    msg.delete();

  }

  else if (command === 'banish') { //other than that tho...

    var bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));

    var bReason = args.join(" ").slice(22);

      if (!bUser) {
 
        return msg.channel.send('This user does not exist. Please be sure that the name of the user you are trying to find is entered correctly');

        msg.delete();

      }

      else {

        const banEmbed = new Discord.RichEmbed()

        .setDescription('~BANISHED TO THE SHADOW REAL@~')
        .setColor(0x58ffe2)
        .addField('Banished User', `${bUser} with ID ${bUser.id}`)
        .addField('Banished By', `<@${msg.author.id}> with ID ${msg.author.id}`)
        .addField('Occured At', msg.createdAt)
        .addField('Reason', bReason);

        let banRole = msg.member.guild.roles.find('name', 'SHADOW REAL@');

        msg.guild.member(bUser).addRole(banRole);

        msg.channel.send(banEmbed);

        msg.delete();

      }
	  
  }  
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }

});



//D2 Infographics (?[activity]maps)

bot.on ('message', msg => {
	
	try {
  
  //Leviathan
  
  const underEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of the Leviathan Underbelly")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/UVt3gMR.jpg');
  
  const dogsEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of the Pleasure Gardens")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/VUKZ6Qa.png');
  
  //Scourge of the Past
  
  const botzaEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of the Berserker Encounter")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/4oZq7ue.png');
  
  const sewerEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of the Sewers")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/ldCT2XI.png');
  
  const ablazedEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of Ablazed Glory Route")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/8Y9Vw5i.png');
  
  const primeEmbed = new Discord.RichEmbed()
  
    .setDescription("CAP for INSURRECTION PRIME\n(there's always that one dude that'll fuck it up lol)")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/tPY5Pfz.jpg');
  
  //Last Wish
  
  const eyesEmbed = new Discord.RichEmbed()
  
    .setDescription("Eye Chart for Riven")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/zoQxwnF.png');
  
  const rivenEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of Riven Callouts")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/E3Zpb38r.jpg');
  
  //Pit of Heresy
  
  const ogreEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of the Tunnels of Despair")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/ieLhWXu.jpg');
  
  const harrowEmbed = new Discord.RichEmbed()
  
    .setDescription("Map of The Harrow")
    .setColor(0x58ffe2)
    .setImage('https://i.imgur.com/WMDLx83.png');
  
  
  if (msg.content === "?levimaps") {
    
    msg.delete();   
    msg.channel.send(underEmbed);    
    msg.channel.send(dogsEmbed);
    
  }
  
  else if (msg.content === "?sotpmaps") {
  
    msg.delete();
    msg.channel.send(botzaEmbed);    
    msg.channel.send(sewerEmbed);   
    msg.channel.send(ablazedEmbed);    
    msg.channel.send(primeEmbed);
    
  }
  
  else if (msg.content === "?lwmaps") {
   
    msg.delete();    
    msg.channel.send(eyesEmbed);    
    msg.channel.send(rivenEmbed);
    
  }
  
  else if (msg.content === "?pitmaps") {
    
    msg.delete();   
    msg.channel.send(ogreEmbed);  
    msg.channel.send(harrowEmbed);
    
  }
		
	}
	
	catch (err) {
		
		catchErr(err, msg); }
	
});
