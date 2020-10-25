var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
function GroceryList(grocery) {
    return grocery.name + " " + grocery.quantity;
}
var List = new Grocery("Milk", 3);
document.body.textContent = GroceryList(List);
