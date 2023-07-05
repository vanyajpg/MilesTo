const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


router.get('/', loginController.getIndex) 

// description  login/landing page
// route    GET / 

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login', 
    })
})

module.exports = router