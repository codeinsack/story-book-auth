const express = require('express')
const router = express.Router()
const { ensureAuth, insureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

router.get('/',  insureGuest, (req, res) => {
  res.render('login', {
    layout: 'login'
  })
})

router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id })
      .lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories,
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = router