const usermodel = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {generateTokens} = require('../utils/generateTokens')


module.exports.userAuthentication =  (req, res) => {
    try {
        const { username, email, password } = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.status(500).send('something went wrong')
                else {
                    let user = await usermodel.create({
                        username,
                        email,
                        password: hash,
                    })

                    const token = generateTokens(user)
                    res.cookie('token', token);
                    res.send('user registered successfully')
                }
            });
        })
    }
    catch (err) {
        res.send(err.message);
    }
}