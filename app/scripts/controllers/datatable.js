'use strict';

/**
 * @ngdoc function
 * @name saratogaApp.controller:DatatableController
 * @description
 * # DatatableController
 * Controller of the saratogaApp
 */
angular.module('saratogaApp')
  .controller('DatatableController', function ($scope) {

    function getEndingRowNumber(pageIndex){
    	var endRowNumber = ( pageIndex + 1 ) * rowsPerPage;
    	return (endRowNumber > $scope.totalRows) ? $scope.totalRows: endRowNumber;
    }
    var data = [{name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}];

    var rowsPerPage = 5,
    	pageIndex = 0;

    // get column names
    var keys = [];
    angular.forEach(data[0], function(value, key){
    	keys.push(key);
    });
    $scope.keys = keys;

    // get rows per page
    $scope.totalRows = data.length;
    $scope.pageIndex = 0;

    // update pagination variables based on change in pageIndex
    $scope.$watch('pageIndex', function(newPageIndex){
    	$scope.isPrevDisabled = (newPageIndex < 1);
    	$scope.isNextDisabled = ( newPageIndex >= Math.floor( $scope.totalRows / rowsPerPage ) );
    	$scope.startingRowNumber = ( newPageIndex * rowsPerPage ) + 1;
    	$scope.endingRowNumber = getEndingRowNumber(newPageIndex);
	    $scope.data = data.slice($scope.startingRowNumber, $scope.endingRowNumber);
    });

    // pagination functions
    $scope.prev = function(){
    	$scope.pageIndex--;
    };
    $scope.next = function(){
    	$scope.pageIndex++;
    };
  });
