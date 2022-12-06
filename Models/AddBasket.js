const mongoose = require('mongoose')

const Basket = mongoose.Schema({
    ProductId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Product"
    }
}) 