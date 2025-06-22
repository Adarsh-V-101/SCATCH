const mongooose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullName: {
        type: String,
        minlength: 3,
        trim:true
    },
    email: String,
    password: String,
    
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
})

module.exports = mongooose.model('owner', ownerSchema)