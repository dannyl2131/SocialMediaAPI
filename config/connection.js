//add mongoose connection data in here
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialmediaapi');

module.exports = mongoose.connection;