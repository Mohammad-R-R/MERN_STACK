const mongoose = require('mongoose');
const proSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number} ,
    desc:{type: String}

}, { timestamps: true });
module.exports.Product = mongoose.model('Product', proSchema);