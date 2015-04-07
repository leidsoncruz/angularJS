'use strict';

/**
 * @ngdoc function
 * @name kitchensinkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kitchensinkApp
 */
angular.module('kitchensinkApp')
  .controller('MainCtrl', function ($scope) {
     $scope.template = {
        "sidebar": "Sidebar/sidebar.html",
      };

    
  });
