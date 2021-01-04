(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunchlist = "";
  $scope.lunchMessage="";

  $scope.checkTooMuch = function(){
    //console.log($scope.lunchlist.length)
    if ($scope.lunchlist.length == 0) {$scope.lunchMessage = "Please enter a list of comma separated dishes you usually have for lunch!"}
    else if(calculateNumberOfItemsInString($scope.lunchlist) > 3 )  {$scope.lunchMessage = "Too much!"}
    else {$scope.lunchMessage = "Enjoy!"};
  };

  function calculateNumberOfItemsInString(string){
    var items = string.split(',');
    return items.length;
  };
}

})();
