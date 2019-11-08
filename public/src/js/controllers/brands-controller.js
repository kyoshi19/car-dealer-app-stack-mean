app.controller('brandsCtrl', ['$http', '$routeParams', '$scope',
  function($http, $routeParams, $scope) {

    var vm = this;

    vm.controllerName = "brandsCtrl";

    vm.catalogs = $scope.$parent.mctrl.catalogs;
    
    $http.get('/api/brands').then(function(response) {

      vm.brands = response.data;

    });

    vm.toInsert = function() {

      let id = 0;

      vm.brands.forEach(element => {
        id = element.id > id ? element.id : id;
      });

      id += 1;

      window.location = "#!/brand/" + id;
    };

    vm.addBrand = function() {

      vm.newBrand.id = $routeParams.codigo;

      var xhr = $http.post('/api/brands', vm.newBrand)

      xhr.then(function(response) {

        console.log(response);

        $scope.$parent.mctrl.initCatalogs();

        window.location = "#!/brands";

      });
    };

}]);