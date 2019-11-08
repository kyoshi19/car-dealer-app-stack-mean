var BrandsService = require('./brandsService');
var ModelsService = require('./modelsService');
var CarsService = require('./carsService');


module.exports.BrandsService = BrandsService;

module.exports.ModelsService = ModelsService;

module.exports.CarsService = CarsService;

module.exports.GetCatalogs = function(req, res) {

  var catalogs = {};

  BrandsService.getAllBrandsToCatalog().then(function(response) {

    catalogs.brands = [];

    response.forEach(element => {

      catalogs.brands.push({
        id: element.id,
        name: element.name
      });

    });

    ModelsService.getAllModelsToCatalog().then(function(response) {

      catalogs.models = [];

      response.forEach(element => {

        catalogs.models.push({
          id: element.id,
          name: element.name,
          brand: element.brand.id
        });

      });

      res.json(catalogs);

    })

  });
}