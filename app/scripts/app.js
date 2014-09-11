'use strict';

/**
 * @ngdoc overview
 * @name saratogaApp
 * @description
 * # saratogaApp
 *
 * Main module of the application.
 */
angular
  .module('saratogaApp', [
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
      .when('/get-started', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/grid', {
        templateUrl: 'views/datatable.html',
        controller: 'DatatableController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
