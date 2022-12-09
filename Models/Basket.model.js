const mongoose = require('mongoose')

const basketSchema = mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    products:[{
        productId:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Product"
        }, 
        amount:{
            type:Number,
            default:1
        }
}],
    // total: Number
}) 

const Basket = mongoose.model("Basket", basketSchema )
module.exports = Basket