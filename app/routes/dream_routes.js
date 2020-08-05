const express = require('express')
const passport = require('passport')
const Dream = require('./../models/dream')
// const customErrors = require('../../lib/custom_errors')
// we'll use this function to send 404 when non-existant document is requested
// const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership
// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET all dreams
router.get('/dreams', requireToken, (req, res, next) => {
  Dream.find({'owner': req.user.id})
    .populate('dream')
    .then(dream => {
      return dream.map(dream => dream.toObject())
    })
    .then(dreams => res.status(200).json({ dreams: dreams }))
    .catch(next)
})

// CREATE
// POST /dream/:id
router.post('/dreams', requireToken, (req, res, next) => {
  req.body.dream.owner = req.user.id
  Dream.create(req.body.dream)
    .then(dream => {
      res.status(201).json({ dream: dream.toObject() })
    })
    .catch(next)
})

module.exports = router
