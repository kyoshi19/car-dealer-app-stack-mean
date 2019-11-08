var Car = require('../modelos/car');

// Optiene todos los autos
module.exports.getAllCars = function(req, res) {

  var xhr = Car.find();

  xhr.then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });

};

// Optiene todas los objetos Model para un objeto Brand
module.exports.getAllCarsByBrand = function(req, res) {

  var filter = {
    "brand.id": {
      $eq: req.params.brand
    }
  };

  console.log(filter);

  var xhr = Car.find(filter);

  xhr.then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });

};

// Guarda un objeto Model en base de datos
module.exports.setCar = function(req, res) {

  let data = {
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
    price: req.body.price
  }

  // Creo el objeto Model
  Car.create(data, function(err, response) {

    if (err) {
      return res.json({
        error: err.name + ': ' + err.message
      });
    }

    res.json(response);

  });

};