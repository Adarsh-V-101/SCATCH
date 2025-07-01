const jwt = require('jsonwebtoken')
const userModel= require('../models/userModel')

module.exports = async (req , res, next)=>{
    if(!req.cookies.token){
        req.flash('error','something went wrong')
        return res.redirect('/')
    }

    try{
        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = await userModel.findOne({email: decode.email}).select('-password')
        if(!user){
            req.flash('error','something went wrong')
            return res.redirect('/')
        }
        else{
            req.user = user
            next()
        }
    }
    catch(err){
        console.log(err);
        res.redirect('/')
        
    }
}