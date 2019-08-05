// Business Logic
var del = 2000;
var PizzatotalPrice = [];
function Order (pizzaSize, crust) {
this.pizzaSize = pizzaSize;
this.crust = crust;
this.Topping1 = 500;
this.Topping2 = 1000;
this.Topping3 = 500;
this.pizzaPrice = 0;
this.pizzaNumber = 1;
this.pizzaNumbers = [];
}
Order.prototype.pizzaCost = function () {
if (this.pizzaSize === "Small") {
this.pizzaPrice += 2000;
} else if (this.pizzaSize === "Medium") {
this.pizzaPrice += 3000;
} else if (this.pizzaSize === "Large") {
this.pizzaPrice += 4000;
}
if (this.crust === "crispy") {
this.pizzaPrice += 1000;
} else if (this.crust === "stuffed") {
this.pizzaPrice += 1500;
} else if (this.crust === "glutenFree") {
this.pizzaPrice += 2000;
}
