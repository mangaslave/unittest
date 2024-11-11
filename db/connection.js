const mongoose = require('mongoose');

////The environment variable for your connection string goes here////
let mongoDB = process.env.MONGODB;
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
