import mongoose from "mongoose"; 

require('dotenv').config();

const mongoDB = process.env.MONGODB;

if (!mongoDB) {
    throw new Error("MongoDB connection string is undefined. Check your .env file.");
}

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;

