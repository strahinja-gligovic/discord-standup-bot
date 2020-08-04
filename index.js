const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.mentions.has(client.user)) {
    message.channel.send('thanks for mentioning me <3')
  }
});

client.login(process.env.TOKEN);