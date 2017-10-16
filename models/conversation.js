var mongoose = require('mongoose')
var Schema = mongoose.Schema

var conversationSchema = new Schema({
  members: [String],
  comments: [{
    message: String,
    sentAt: { type: Date, default: Date.now },
    author: String
  }]
})

var conversationModel = mongoose.model('Conversation', conversationSchema)

module.exports = conversationModel
