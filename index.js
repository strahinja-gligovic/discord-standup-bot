require('dotenv').config()

require('./database/index.js').connectToDatabase(function (err, client) {
    if (err) console.log(err);
    require('./bot/index.js').initializeDiscordBot();
    require('./server/index.js').initializeServer();
});