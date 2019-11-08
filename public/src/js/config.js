app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "src/partials/main.html"
  })
  .when("/brands", {
    templateUrl : "src/partials/brands.html",
    controller: 'brandsCtrl',
    controllerAs: 'ctrl'
  })
  .when("/brand/:codigo", {
    templateUrl : "src/partials/addBrand.html",
    controller: 'brandsCtrl',
    controllerAs: 'ctrl'
  })
  .when("/models/:codigo", {
    templateUrl : "src/partials/models.html",
    controller: 'modelsCtrl',
    controllerAs: 'ctrl'
  })
  .when("/model/:codigo", {
    templateUrl : "src/partials/addModel.html",
    controller: 'modelsCtrl',
    controllerAs: 'ctrl'
  })
  .when("/cars/:codigo", {
    templateUrl : "src/partials/cars.html",
    controller: 'carsCtrl',
    controllerAs: 'ctrl'
  })
  .when("/car/:codigo", {
    templateUrl : "src/partials/addCar.html",
    controller: 'carsCtrl',
    controllerAs: 'ctrl'
  });
  
});