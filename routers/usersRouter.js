const express = require('express')
const router = express.Router();
const { userAuthentication ,userLogin, logout } = require('../controller/authController')

router.get('/', function (req, res) {
    res.send('user hello')

})

// router.post('/register',registerUser)
router.post('/register', userAuthentication)
router.post('/login', userLogin)
router.get('/logout', logout)


module.exports = router