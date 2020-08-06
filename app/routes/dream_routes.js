const express = require('express')
const passport = require('passport')
const Dream = require('./../models/dream')
const customErrors = require('../../lib/custom_errors')
// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET all dreams
router.get('/dreams', requireToken, (req, res, next) => {
  Dream.find({'owner': req.user.id})
    .populate('dreams')
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

// SHOW
// GET /dreams/:id
router.get('/dreams/:id', requireToken, (req, res, next) => {
  Dream.findById(req.params.id)
    .then(handle404)
    .then(dream => res.status(200).json({ dream: dream.toObject() }))
    .catch(next)
})

// UPDATE
// PATCH /dreams/:id
router.patch('/dreams/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.dream.owner
  Dream.findById(req.params.id)
    .then(dream => {
      requireOwnership(req, dream)
      return dream.updateOne(req.body.dream)
    })
    .then(dream => res.sendStatus(204).json({ dream: dream }))
    .catch(next)
})

// DESTROY
// DELETE /dreams/:id
router.delete('/dreams/:id', requireToken, (req, res, next) => {
  Dream.findById(req.params.id)
    .then(handle404)
    .then(dream => {
      requireOwnership(req, dream)
      dream.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
