const Discord = require('discord.js');
const Responses = require('./responses.js');
const { response } = require('express');

function initializeDiscordBot() {
    const client = new Discord.Client();
    const responses = Responses.initializeResponses(client);

    client.on('message', message => {
        responses.mentionReply(message);
        responses.insertLineForUser(message);
        responses.getLinesForUser(message);
        responses.commandsAreNICE(message);
    });

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.login(process.env.TOKEN);
}

exports.initializeDiscordBot = initializeDiscordBot;