

(function()
{
         'use strict';

         angular.module('myApp',[])
             .controller('myController',inter);

                  inter.$inject = ['$scope'];
                  function inter($scope) {
                         $scope.msg = "red";

                      $scope.toggle = function()
                      {
                          $scope.msg = "stock";
                      }
                  }

})();
