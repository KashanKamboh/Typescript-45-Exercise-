var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of countries and Print its Orginal Order
var countriesToVisit = ["China", "Turkey", "japan", "Brazil"];
console.log("Orginal Order:", countriesToVisit);
//Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the Array is still in its Original Order
console.log("still in Original Order:", countriesToVisit);
//Print the Array in Reverse Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("still in Original Order:", countriesToVisit);
// We have change the Original Array Order now
console.log("Orignal Array Reverse;", countriesToVisit.reverse());
//Print the Array to Show that its back to its original Order
console.log("Back to Original Order:", countriesToVisit.reverse());
//Print the Array to show that its Order has been Change in Alphabetical  Order Now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have change again the Original Array Order now in reverse order again
console.log("Orignal Array Reverse again;", countriesToVisit.reverse());
