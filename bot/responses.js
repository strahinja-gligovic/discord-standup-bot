const db = require('../database/index.js').getDatabase();

const commands = [
    'GET_HISTORY'
]

function initializeResponses(client) {
    this.mentionReply = function (message) {
        if (message.mentions.has(client.user)) {
            message.channel.send('thanks for mentioning me <3')
        }
    }

    this.insertLineForUser = async function (message) {
        if (!commands.includes(message.content)) {
            db.collection('messages').insertOne({
                userId: message.author.id,
                name: message.author.username,
                text: message.content
            })
        }
    }

    this.getLinesForUser = async function (message) {
        if (message.content === commands[0]) {
            db.collection('messages').find({
                userId: message.author.id
            }).toArray(async (error, messages) => {
                if (error) {
                    console.log(error);
                } else {
                    message.channel.send(transformMessages(messages));
                }
            });
        }
    }

    return this;
}

function transformMessages(messages) {
    var response;

    response = 'HERE IS YOUR CHAT HISTORY WITH THE BOT: \n\n'

    for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        response += message.text;
        if (index < messages.length - 1) response += '\n'
    }

    response += '\n\nTHAT\'S IT !\nTHANKS <3'

    return response;
}

exports.initializeResponses = initializeResponses;