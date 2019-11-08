var Model = require('../modelos/model');

// Optiene todas los objetos Model
module.exports.getAllModels = function(req, res) {

  var xhr = Model.find();

  xhr.then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });

};

function getAllModelsToCatalog() {

  return new Promise(function(resolve, reject) {

    Model.find({}, function(err, response) {

      if (err) {
        return reject(err);
      }

      resolve(response);

    });

  });

}

module.exports.getAllModelsToCatalog = getAllModelsToCatalog;



// Optiene todas los objetos Model para un objeto Brand
module.exports.getAllModelsByBrand = function(req, res) {

  var filter = {
    "brand.id": {
      $eq: req.params.brand
    }
  };

  console.log(filter);

  var xhr = Model.find(filter);

  xhr.then(function(response) {
      res.send(response);
    })
    .catch(function(err) {
      res.send(err);
    });

}

// Guarda un objeto Model en base de datos
module.exports.setModel = function(req, res) {

  let data = {
    id: req.body.id,
    name: req.body.name,
    brand: req.body.brand,
    type: req.body.type,
    engine: req.body.engine,
    traction: req.body.traction,
    horsePower: req.body.horsePower
  }

  // Creo el objeto Model
  Model.create(data, function(err, response) {

    if (err) {
      return res.json({
        error: err.name + ': ' + err.message
      });
    }

    res.json(response);

  });

};