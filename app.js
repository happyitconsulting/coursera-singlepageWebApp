(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.name = "Yaakov";
  $scope.totalCount=0;

  $scope.checkTooMuch = function(){
    var itemCount = calculateNumberOfItemsInString($scope.lunchList);
    console.log(itemCount);
    if (itemCount > 3) {$scope.totalCount = "Too much!"}
    else if (itemCount < 0) {$scope.totalCount = "Please enter a list of comma separated dishes you usually have for lunch!"}
    else {$scope.totalCount = "Enjoy!"};
  };

  function calculateNumberOfItemsInString(string){
    var items = string.split(',');
    return items.length;
  };
}

})();
