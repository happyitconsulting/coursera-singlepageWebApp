(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

  buyList.buyItem = function (itemIndex) {
    console.log(itemIndex);
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy
  var toBuyItems = [ {name: "Chickens", quantity: "3", bought:0},
                {name: "Donuts", quantity: "6", bought:0},
                {name: "Eggs", quantity: "12", bought: 0},
                {name: "Milk", quantity: "2", bought: 0},
                {name: "Chocolate", quantity: "1", bought: 0},
                {name: "Peanut Butter", quantity: "1", bought: 0}
               ];

  // List of shopping items bought
  var alreadyBoughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.buyItem = function (itemIndex) {
    service.addItem (toBuyItems[itemIndex].name,toBuyItems[itemIndex].quantity);
    service.removeItem (itemIndex);
    console.log(toBuyItems);
    // alreadyBoughtItems.push(toBuyItems[itemIndex]);
    console.log(alreadyBoughtItems);
  };

  service.getBuyItems = function () {
    console.log ( toBuyItems );
    return toBuyItems;
  };

  service.getItemsBought = function () {
    console.log ( alreadyBoughtItems );
    return alreadyBoughtItems;
  };

}

})();
