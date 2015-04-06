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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
