const usermodel = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { generateTokens } = require('../utils/generateTokens');
const userModel = require('../models/userModel');


module.exports.userAuthentication = async function(req, res) {
    try {
        const { username, email, password } = req.body;

        let user = await usermodel.findOne({email: email})
        if(user){
            res.status(409).send('user already exists')
        }

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
                    // res.status(201).send('user registered successfully')
                    res.redirect('/shop')
                }
            });
        })
    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports.userLogin = async (req, res) =>{

    let {email, password} = req.body;

    let user = await userModel.findOne({email: email})

//     bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true
// });
    if(user){
        bcrypt.compare(password, user.password, function(err, result){
        if(result){
            const token = generateTokens(user)
            res.cookie('token', token);
            res.status(200).send('Logged in successfully')
        } 
        else{
            res.send('email or password is incorrect')
        }       
        })
    }
    else{
        res.send('no user found')
    }
}

module.exports.logout = (req,res) =>{
     res.clearCookie("token")
    res.redirect('/')
}