const express = require('express');

const router = express.Router()
const {login, signup} = require('../controllers/User')

//login route
router.post('/login', login)

//signup route
router.post('/signup', signup)

module.exports = router;