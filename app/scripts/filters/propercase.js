'use strict';

/**
 * @ngdoc filter
 * @name geminiApp.filter:propercase
 * @function
 * @description
 * # propercase
 * Filter in the saratogaApp.
 */
angular.module('saratogaApp')
  .filter('propercase', function(){
    return function(str){
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
  })
