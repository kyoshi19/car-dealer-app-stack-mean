var app = angular.module('carDealerApp', ['ngRoute']);

app.controller('masterCtrl', ['$http', function($http) {

  var vm = this;

  vm.headerTemplate = 'src/partials/header.html';

  vm.activeTab = window.location.hash.split('/')[1];

  vm.redirectTo = function(page) {

    vm.activeTab = page;

    switch (page) {
      case 'brands':
        window.location = '#!/brands'
        break;

      case 'models':
        window.location = '#!/models/all'
        break;

      case 'cars':
        window.location = '#!/cars/all'
        break;

      default:
        break;
    }
  }

  vm.initCatalogs = function() {

    let xhr = $http.get('/api/catalogs');

    xhr.then(function(response) {

      vm.catalogs = response.data;

    });

  }

  vm.initCatalogs();

}]);