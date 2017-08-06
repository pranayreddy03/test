

(function()
{
    'use strict';

             angular.module('myApp',[])
                    .controller('myController', function ($scope,$filter)
                    {
                           $scope.name = "";
                           $scope.upCase = function()
                           {
                               var u = $filter('uppercase');
                               $scope.name = u($scope.name);
                           }

                    })

})();


/*Dependency Injection in Angular needs to be minification proof*/
// Different ways for writing controller
// Writing the Dependency injection in a different way so that evn minified, code works

/*
.controller('myController', DI);

function DI($scope, $filter)
{
    $scope.name = "";
    $scope.upCase = function()
    {
        var u = $filter('uppercase');
        $scope.name = u($scope.name);
    }

})*/



// Writing the Dependency injection in a different way so that even minified, code works

/*
 .controller('myController', ['$scope', '$filter' DI]);

 function DI($scope, $filter)
 {
 $scope.name = "";
 $scope.upCase = function()
 {
 var u = $filter('uppercase');
 $scope.name = u($scope.name);
 }

 })*/


// Writing the Dependency injection in a different way so that even minified, code works

/*
 .controller('myController', DI);

DI.$inject = ["$scope","$filter"];
 function DI($scope, $filter)
 {
 $scope.name = "";
 $scope.upCase = function()
 {
 var u = $filter('uppercase');
 $scope.name = u($scope.name);
 }

 })*/