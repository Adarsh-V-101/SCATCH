const mongooose = require('mongoose');


const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelColor: String,
    textColor: String,
})

module.exports = mongooose.model('product', productSchema)