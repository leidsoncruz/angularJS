var app = angular.module('app', []);

app.controller('PerCtrl', ['$scope','permissoes',function($scope, permissoes){
    permissoes.get().then(function(data){
        $scope.permissoes = data.data.resultados;
    });

}]);

app.factory('permissoes',['$http',function($http){
  var url = 'permissoes.json';
  return {
      get: function(){
          return $http.get(url);
      }
  }
}]);