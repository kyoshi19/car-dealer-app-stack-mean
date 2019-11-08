app.controller('modelsCtrl', ['$http', '$routeParams', '$scope',
  function($http, $routeParams, $scope) {

    var vm = this;

    vm.controllerName = "modelsCtrl";

    vm.catalogs = $scope.$parent.mctrl.catalogs;

    vm.codigo = $routeParams.codigo;

    if (vm.codigo == "all") {

      $http.get('api/models').then(function(response) {

        vm.models = response.data;
      }, function(err) {
        console.log(err);
      });

    } else {

      $http.get('api/models/' + vm.codigo).then(function(response) {
        if (response.data.err) {
          window.location = '#!/brands';
          return;
        }
        vm.models = response.data;
      });

    }

    vm.viewAll = function() {

      window.location = "#!/models/all";

    }

    vm.toInsert = function() {

      let id = 0;

      vm.models.forEach(element => {
        id = element.id > id ? element.id : id;
      });

      id += 1;

      window.location = "#!/model/" + id;
    };

    vm.addModel = function() {

      vm.newModel.id = vm.codigo;

      var xhr = $http.post('/api/models', vm.newModel)

      xhr.then(function(response) {

        console.log(response);

        window.location = "#!/models/all";

      });

      xhr.catch(function(error) {
        console.error(error);
      })
    };

}]);