'use strict';

/**
 * @ngdoc function
 * @name saratogaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the saratogaApp
 */
angular.module('saratogaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
