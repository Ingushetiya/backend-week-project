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

const Fastfood = mongoose.model('Fastfood', mongooseSchema);

module.exports = Fastfood;