const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  description: String,
  quantity: Number,
  rating: {
    rate: Number,
    count: Number
  }
});

module.exports = mongoose.model('Product', productSchema);
