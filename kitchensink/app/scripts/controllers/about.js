'use strict';

/**
 * @ngdoc function
 * @name kitchensinkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kitchensinkApp
 */
angular.module('kitchensinkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
