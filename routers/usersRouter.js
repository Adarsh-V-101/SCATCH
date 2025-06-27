const express = require('express')
const usermodel = require('../models/userModel')
const router = express.Router();

router.get('/', function(req, res){
    res.send('user hello')

})

router.post('/register', async (req, res) => {
    try{
        const { username,email, password } = req.body;

        let user = await usermodel.create({
            username,
            email,
            password
        })
        res.send(user)
    }
    catch(err){
        res.send(err.message);
        
    }

})


module.exports = router