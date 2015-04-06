var app = angular.module('HttpInterceptor', ['ngRoute', 'ngResource']);

app.config(['$httpProvider', function($httpProvider) {
  //Register the interceptor
  $httpProvider.interceptors.push('myHttpInterceptor');
}]);

//My interceptor
app.factory('myHttpInterceptor', ['$q', function($q) {
  var numRequests = 0;
  //Div with loader
  var ajaxSpinner = $("#loading");

  //Function to hide loading
  var hide = function(r) {
    if (!--numRequests) {
      ajaxSpinner.hide();
    }
    return r;
  };

  return {
    'request': function(config) {
      numRequests++;
      ajaxSpinner.show();
      return config;
    },
    'response': function(response) {
      return hide(response);
    },
    'responseError': function(response) {
      //Check if error is conection refused
      if (response.status == 0) {
        //DO SOMETHING...
        return;
      }
      return $q.reject(hide(response));
    }
  };
}]);

app.controller('GitCtrl', ['$scope', 'github', function($scope, github) {
  github.get().then(function(data) {
    $scope.user = data.data;
  });
  $scope.name = 'asa';
  github.followers().then(function(data) {
    $scope.followers = data.data
  });

  github.repo().then(function(data) {
    $scope.repo = data.data
  });

  github.receivedEvents().then(function(data) {
    $scope.receivedEvents = data.data
  });
}]);

app.factory('github', ['$http', function($http) {
  var url = 'https://api.github.com/users/leidsondias',
    follow = "https://api.github.com/users/leidsondias/followers",
    repo = "https://api.github.com/users/leidsondias/repos",
    received_events = "https://api.github.com/users/leidsondias/received_events";
  return {
    get: function() {
      return $http.get(url);
    },
    followers: function() {
      return $http.get(follow);
    },
    repo: function() {
      return $http.get(repo);
    },
    receivedEvents: function() {
      return $http.get(received_events);
    }
  }
}]);