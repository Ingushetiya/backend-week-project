const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    weight: String,
    categories: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Drink', productShema);

module.exports = Product;