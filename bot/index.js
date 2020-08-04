const Discord = require('discord.js');
const Responses = require('./responses.js');
const { response } = require('express');

function initializeDiscordBot() {
    const client = new Discord.Client();
    const responses = Responses.initializeResponses(client);


    function initializeMessageListeners() {
        client.on('message', message => responses.mentionReply(message));
        client.on('message', message => responses.insertLineForUser(message));
        client.on('message', message => responses.getLinesForUser(message));
        client.on('message', message => responses.commandsAreNICE(message));
    }

    initializeMessageListeners();
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.login(process.env.TOKEN);
}

exports.initializeDiscordBot = initializeDiscordBot;