const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    weight: String,
    categories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', productShema);

module.exports = Product;