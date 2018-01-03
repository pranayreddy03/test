(function()
{
    'use strict';

    angular.module('ShoppingListApp',[])
           .controller('ShoppingListAddController',ShoppingListAddController)
           .controller('ShoppingListShowController',ShoppingListShowController)
           .service('ShoppingListService',ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService)
    {
        var AddCtrl = this;
        AddCtrl.itemName = "";
        AddCtrl.itemQuantity = "";

        AddCtrl.addItem = function()
        {
            ShoppingListService.addItem(AddCtrl.itemName, AddCtrl.itemQuantity);
        }
    }

    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService)
    {
        var ShowCtrl = this;
        ShowCtrl.items = ShoppingListService.getItems();
        ShowCtrl.removeItem = function (itemIndex)
        {
            ShoppingListService.removeItem(itemIndex);
        }
    }
    function ShoppingListService()
    {
        var service = this;
        var items = [];
        service.addItem = function(itemName,itemQuantity)
        {
            var item =
                {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
        };
        service.getItems = function()
        {
            return items;
        };
        service.removeItem = function(itemIndex)
        {
            items.splice(itemIndex,1);
        }
    }
})();
