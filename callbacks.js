module.exports.onMessage = (message) => {
    message.author.send('you said: \n' + message.content);
}