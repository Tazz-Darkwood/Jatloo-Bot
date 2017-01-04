var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
  // Set the prefix
  let prefix = "!";
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;
  // Exit if any bot
  if(msg.author.bot) return;  

  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("pong!");
  } 

  else if (msg.content.startsWith(prefix + "foo")) {
    msg.channel.sendMessage("bar!");
  }
});


bot.login("MjY2MjU4OTE5MzYwMjk5MDA5.C07F0Q.wpiGIoq9hHBwr894m5mAooh38Uw");