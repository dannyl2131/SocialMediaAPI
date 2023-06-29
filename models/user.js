const {Schema, Types} = require('mongoose');
const {Thought} = require('./thought')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    // thoughts: [Thought],
    // friends: [User]
})

module.exports = userSchema;