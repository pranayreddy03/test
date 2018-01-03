(function()
{
      'use strict';

       var shopping1 = ['milk','butter','cookie','bread','egg','soda'];

       var shopping2 = [
           {
                 name : 'milk',
                 quantity: 2
           },
    {
        name : 'butter',
            quantity: 5
    },
    {
        name : 'egg',
            quantity: 8
    },
    {
        name : 'soda',
            quantity: 7
    }
       ];
      angular.module('shoppingList',[])
             .controller('shoppingController',TwoWay);

      TwoWay.$inject = ['$scope'];
      function TwoWay($scope)
      {
             $scope.shopping1 = shopping1;
             $scope.shopping2 = shopping2;

             $scope.add = function()
             {
                 var newItem =
                     {
                         name : $scope.newItemName,
                         quantity : $scope.newItemQuantity
                     };
                     $scope.shopping2.push(newItem);
             }
      }


})();