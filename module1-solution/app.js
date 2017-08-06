(function()
{
    'use strict';
    angular.module('LunchCheck',[])
           .controller('LunchCheckController', LC);
            LC.$inject = ['$scope'];
            function LC($scope)
            {
                $scope.list = "";

                $scope.check = function()
                {
                     var a = $scope.list.split(',');
                     if($scope.list == "")
                     {
                         $scope.msg = "Please enter data first";
                         $scope.clr = "red";
                         $scope.brdrClr = "red";
                     }
                     else {
                         if (a.length <= 3 && a.length > 0) {
                             $scope.msg = "Enjoy!";
                             $scope.clr = "green";
                             $scope.brdrClr = "green";
                         }
                         else if (a.length > 3) {
                             $scope.msg = "Too much!";
                             $scope.clr = "green";
                             $scope.brdrClr = "green";
                         }
                     }
                }
            }

})();