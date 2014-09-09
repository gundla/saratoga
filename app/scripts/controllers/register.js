'use strict';

/**
 * @ngdoc function
 * @name saratogaApp.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the saratogaApp
 */
angular.module('saratogaApp')
  .controller('RegisterController', function ($scope) {
  	$scope.user = {};
  	$scope.user.created = false;

    $scope.register = function(){
    	$scope.submitted = true;
    	if( !$scope.signup_form.$valid ){
    		return false;
    	}
    	$scope.user.created = true;
    };
  });
