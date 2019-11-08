var Brands = require('../modelos/brand');
var Models = require('../modelos/model');
var Cars = require('../modelos/car');

// Optiene todas los objetos Brands
module.exports.getAllBrands = function(req, res) {

  var brands = [];

  Brands.find({}, function(err, response) {

    if (err) {
      return res.json({
        error: err.name + ': ' + err.message
      });
    }

    Models.find({}, function(err, models) {

      if (err) {
        return res.json({
          error: err.name + ': ' + err.message
        });
      }

      response.forEach(element => {

        let count = 0;

        models.forEach(model => {
          if (element.id == model.brand.id) {
            count++;
          }
        });

        element.modelsCount = count;

        brands.push(element);

      });

      Cars.find({}, function(err, cars) {

        if (err) {
          return res.json({
            error: err.name + ': ' + err.message
          });
        }

        brands.forEach(element => {

          let count = 0;

          cars.forEach(model => {
            if (element.id == model.brand.id) {
              count++;
            }
          });

          element._doc.carsCount = count;

        });

        res.send(brands);

      });


    });

  });

}

function getAllBrandsToCatalog() {

  return new Promise(function(resolve, reject) {

    Brands.find({}, function(err, response) {

      if (err) {
        return reject(err);
      }

      resolve(response);

    });

  });

}

module.exports.getAllBrandsToCatalog = getAllBrandsToCatalog;

// Guarda un objeto Brand en base de datos
module.exports.setBrand = function(req, res) {

  let data = {
    id: req.body.id,
    name: req.body.name,
    country: req.body.country,
    owner: req.body.owner
  }

  // Creo el objeto Brand
  let xhr = Brands.create(data)

  xhr.then(function(response) {

    res.json(response);

  });

  xhr.catch(function(err) {
    res.sent(err);
  });

};