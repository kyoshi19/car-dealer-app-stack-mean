var mongoose = require('mongoose');

var Model = mongoose.model('model', {
  id: Number,
  name: String,
  brand: {
    id: Number,
    name: String
  },
  type: String,
  engine: String,
  traction: String,
  horsePower: String
});

module.exports = Model;