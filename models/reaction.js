// **Reaction** (SCHEMA ONLY)
const {Schema, Types} = require('mongoose');

//   * Use a getter method to format the timestamp on query
const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = reactionSchema