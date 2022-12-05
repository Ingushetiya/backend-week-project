const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
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

const Drink = mongoose.model('Drink', mongooseSchema);

module.exports = Drink;