var mongoose = require('mongoose');

var Cars = mongoose.model('car', {
  id: Number,
  brand: {
    id: Number,
    name: String
  },
  model: {
    id: Number,
    name: String
  },
  color: String,
  year: String,
  price: Number
});

module.exports = Cars;