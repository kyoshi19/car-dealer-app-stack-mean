var Controller = require('../services/mainService');
var path = require('path');

module.exports = function(app) {

  /**
   * GENERALES
   */

  //Aplicación
  app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
  });

  // Catálogos
  app.get('/api/catalogs', Controller.GetCatalogs)

  /**
   * APIS DE MARCAS
   */

  // Obtener todas las marcas
  app.get('/api/brands', Controller.BrandsService.getAllBrands);

  // Insertar una marca
  app.post('/api/brands', Controller.BrandsService.setBrand);

  /**
   * APIS DE MODELOS
   */

  //  Obtener todos los modelos
  app.get('/api/models', Controller.ModelsService.getAllModels);

  // Obtener los modelos de una marca
  app.get('/api/models/:brand', Controller.ModelsService.getAllModelsByBrand);

  // Insertar un modelo
  app.post('/api/models/', Controller.ModelsService.setModel);

   //  Obtener todos los autos
   app.get('/api/cars', Controller.CarsService.getAllCars);

   // Obtener los autos de una marca
   app.get('/api/cars/:brand', Controller.CarsService.getAllCarsByBrand);
 
   // Insertar un auto
   app.post('/api/cars/', Controller.CarsService.setCar);
}