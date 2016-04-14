/**
 * @author BobChao87
 * @date 2016-04-13
 */

(function() {
  'use strict';
  
  angular
    .module('ngResourceSample', ['ng', 'ngResource'])
    .controller('ResourceSampleController', ResourceSampleController);
      
  ResourceSampleController.$inject = ['ResourceSample'];
  
  function ResourceSampleController(ResourceSample) {
    // Here we use the name 'scope' to make this example more easily
    // translatable to the typical usage of $scope.
    var scope = this;
    
    
  }
})();
