var app = angular.module('app', []);

app.controller('GitCtrl', ['$scope','github',function($scope, github){
    github.get().then(function(data){
        $scope.user = data.data;
    });
    $scope.name = 'asa';
    github.followers().then(function(data){
        $scope.followers = data.data  
    });
    
    github.repo().then(function(data){
        $scope.repo = data.data  
    });
    
    github.receivedEvents().then(function(data){
        $scope.receivedEvents = data.data  
    });
}]);

app.factory('github',['$http',function($http){
  var url = 'https://api.github.com/users/leidsondias',
      follow = "https://api.github.com/users/leidsondias/followers",
      repo = "https://api.github.com/users/leidsondias/repos",
      received_events = "https://api.github.com/users/leidsondias/received_events";
  return {
      get: function(){
          return $http.get(url);
      },
      followers: function(){
          return $http.get(follow);
      },
      repo: function(){
          return $http.get(repo);
      },
      receivedEvents: function(){
          return $http.get(received_events);
      }
  }
}]);