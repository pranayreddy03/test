
(function () {
      'use strict';

      var shoppingList = ['milk','Butter','Grapes','Olive','Fish','Goat','Chicken','Orange','banana'];
      angular.module('myApp',[])
             .controller('myController',filteredng);

      filteredng.$inject = ['$scope'];
      function filteredng($scope)
      {
          $scope.shoppingList = shoppingList;
      };
})();
