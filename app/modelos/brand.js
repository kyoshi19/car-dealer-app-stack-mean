var mongoose = require('mongoose');

var Brands = mongoose.model('brand', {
  id: Number,
  name: String,
  country: String,
  owner: String,
  modelsCount: Number
});

module.exports = Brands;