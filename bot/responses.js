function initializeResponses(client) {
    this.mentionReply = function (message) {
        if (message.mentions.has(client.user)) {
            message.channel.send('thanks for mentioning me <3')
        }
    }

    return this;
}

exports.initializeResponses = initializeResponses;