const express = require('express')
const router = express.Router();
const ownermodel = require('../models/ownerModel')


router.get('/', function (req, res) {
    res.send('owner hello')
})


if (process.env.NODE_ENV === 'development') {
    router.get('/create', async (req, res) => {

        let owners = await ownermodel.find();
        if(owners.length > 0){
            res.status(503).send('owner already exists')
        }

        let{fullName, email, password} = req.body;

        const createdOwner = await ownermodel.create({
            fullName,
            email,
            password,
        })
        res.status(201).send(createdOwner)
    })
}


module.exports = router