const express = require('express')
const router = express.Router();
const {registerUser} = require('../controller/authController')

router.get('/', function (req, res) {
    res.send('user hello')

})

router.post('/register',registerUser)


module.exports = router