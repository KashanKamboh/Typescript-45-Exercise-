//Define a function with a rest parameter that accepts the items argument representing our sandwhiches
function makeSandwhiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwhiches with the following items \n ");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\n Now Enjoy Sandwhiches\n");
}
//Call the function three times with different number of arguments
makeSandwhiches("Chicken", "Butter", "Lettuce", "Egg");
makeSandwhiches("Bread", "Butter");
makeSandwhiches("Bread", "Cheese", "Beef", "Egg", "Tomato", "Onion");
