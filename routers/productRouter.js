const express = require('express')
const router = express.Router();

router.get('/', function(req, res){
    res.send('product hello')

})

module.exports = router