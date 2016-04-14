/**
 * @author BobChao87
 * @date 2016-04-13
 */

(function() {
  'use strict';
  
  angular
    .module('ngResourceSample')
    .factory('ResourceSample', ResourceSample);
  
  ResourceSample.$inject = ['$resource'];
  
  function ResourceSample($resource) {
    // Here we return an empty object as a placeholder to fulfill our
    // obligation to return an object from the factory constructor.
    return {};
  }
})();