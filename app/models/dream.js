
const mongoose = require('mongoose')

const dreamSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  sleep_time: {
    type: String,
    required: true
  },
  wake_time: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quality: {
    type: String,
    required: true
  },
  meaning: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Dream', dreamSchema)
