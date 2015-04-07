'use strict';

/**
 * @ngdoc overview
 * @name kitchensinkApp
 * @description
 * # kitchensinkApp
 *
 * Main module of the application.
 */
angular
  .module('kitchensinkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ng-repeat', {
        templateUrl: 'views/Directive/ngrepeat.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
