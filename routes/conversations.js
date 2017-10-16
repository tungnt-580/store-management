var express = require('express')
var router = express.Router()
var Conversation = require('../models/conversation')

router.use('/:id', (req, res, next) => {
  Conversation.findOne({}, (err, conversation) => {
    if (err) return next(err)
    if (!conversation) return res.status(404).json({message: 'Conversation not found'})
    res.locals.conversation = conversation
    next()
  })
})

router.post('/', (req, res, next) => {
  Conversation.create(conversationParams(req.body), (err, conversation) => {
    if (err) return res.status(422).json(err)
    res.status(201).json(conversation)
  })
})

router.get('/:id', (req, res, next) => {
  res.json(res.locals.conversation)
})

router.put('/:id', (req, res, next) => {
  res.locals.conversation.set(conversationParams(req.body))
  res.locals.conversation.save((err, conversation) => {
    if (err) return res.status(422).json(err)
    res.json(conversation)
  })
})

function conversationParams(params) {
  fields = ['members','comments', 'author']
  return fields.reduce((result, field) => {
    if (params.hasOwnProperty(field)) result[field] = params[field]
    return result
  }, {})
}

module.exports = router
