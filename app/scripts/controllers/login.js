'use strict';

/**
 * @ngdoc function
 * @name saratogaApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the saratogaApp
 */
angular.module('saratogaApp')
  .controller('LoginController', function ($scope) {
    $scope.user = {};
  	$scope.user.authenticated = false;

    $scope.login = function(){
    	$scope.submitted = true;
    	if( !$scope.login_form.$valid ){
    		return false;
    	}
    	$scope.user.authenticated = true;
    };
  });
