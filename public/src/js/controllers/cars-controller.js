app.controller('carsCtrl', ['$http', '$routeParams', '$scope',
  function($http, $routeParams, $scope) {

    var vm = this;

    vm.controllerName = "carsCtrl";

    vm.catalogs = $scope.$parent.mctrl.catalogs;

    vm.codigo = $routeParams.codigo;

    if (vm.codigo == "all") {

      $http.get('api/cars').then(function(response) {

        vm.cars = response.data;

      });

    } else {

      $http.get('api/cars/' + vm.codigo).then(function(response) {
        if (response.data.err) {
          window.location = '#!/cars';
          return;
        }
        vm.cars = response.data;
      });

    }

    vm.viewAll = function() {
      window.location = "#!/cars/all";
    };

    vm.toInsert = function() {

      let id = 0;

      vm.cars.forEach(element => {
        id = element.id > id ? element.id : id;
      });

      id += 1;

      window.location = "#!/car/" + id;

    };

    vm.addModel = function() {

      vm.isAddingCar = true;

      vm.newCar.id = vm.codigo;

      var xhr = $http.post('/api/cars', vm.newCar)

      xhr.then(function(response) {

        console.log(response);

        vm.isAddingCar = false;

        window.location = "#!/cars/all";

      });

      xhr.catch(function(error) {

        vm.isAddingCar = false;

        console.error(error);
      })
    };

}]);