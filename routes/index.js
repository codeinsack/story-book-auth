const express = require('express')
const router = express.Router()
const { ensureAuth, insureGuest } = require('../middleware/auth')

router.get('/',  insureGuest, (req, res) => {
  res.render('login', {
    layout: 'login'
  })
})

router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard', {
    name: req.user.firstName,
  })
})

module.exports = router