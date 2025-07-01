const express = require('express');
const router = express.Router();
const isLoggedin = require('../middleware/isLoggedin')

router.get('/', function (req, res) {
    res.render('login')
});

router.get('/shop' ,isLoggedin, function(req,res){
    res.render('shop',{ error: req.flash('error') })
})

module.exports = router;