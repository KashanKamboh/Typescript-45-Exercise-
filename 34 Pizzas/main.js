// creating a Array
var Pizza = ["Chicken tikka", "Malai cheese", "Fajita"];
//Using for-loop
for (var _i = 0, Pizza_1 = Pizza; _i < Pizza_1.length; _i++) {
    var onePizza = Pizza_1[_i];
    console.log("I Like ".concat(onePizza, " pizza"));
}
// Print the message outside the for-loop
console.log("I Love Pizzas");
