const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    nameCategory:{
        type: String,
        requireq: true
    }
})

const Category = mongoose.model('Category', mongooseSchema);

module.exports = Category;