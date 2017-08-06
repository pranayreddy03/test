

// implementing scope

(function()
{
    'use strict';

       angular.module('myApp',[])
              .controller('myController',function($scope)
              {
                  // here .name is sitting on the scope and is available in the controller in index.html
                    $scope.name = "This is the name";

                  // sayHello function is sitting on the scope now
                    $scope.sayHello = function()
                    {
                      return "Hello Everyone!";
                    };

                    $scope.fullName = "";


              });


})();