const express = require('exoress');

const router = express.Router()
const {login, signup} = require('../controllers/User')

//login route
router.post('/login', ()=>{})

//signup route
router.post('/signup', ()=>{})

module.exports = router;