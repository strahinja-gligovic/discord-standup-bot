const MongoClient = require('mongodb').MongoClient;
const url =  process.env.MONGODB_URL || "mongodb://localhost:27017";
const databaseName = 'nubovi';

var database;

module.exports = {

    connectToDatabase: function (callback) {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            function (error, client) {
                if (error) {
                    console.log(error)
                } else {
                    database = client.db('nubovi');
                }
                return callback(error);
            });
    },

    getDatabase: function () {
        return database;
    }
};