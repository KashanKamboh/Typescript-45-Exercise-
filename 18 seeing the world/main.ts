//Making a Array of countries and Print its Orginal Order
let countriesToVisit:string[]=["China","Turkey","japan","Brazil"];
console.log("Orginal Order:",countriesToVisit);

//Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:",[...countriesToVisit].sort());

//Show that the Array is still in its Original Order
console.log("still in Original Order:",countriesToVisit);

//Print the Array in Reverse Order without modifying the Actual Array List
console.log("Reverse Order:",[...countriesToVisit].reverse());

console.log("still in Original Order:",countriesToVisit);

// We have change the Original Array Order now
console.log ("Orignal Array Reverse;",countriesToVisit.reverse());

//Print the Array to Show that its back to its original Order
console.log("Back to Original Order:",countriesToVisit.reverse());

//Print the Array to show that its Order has been Change in Alphabetical  Order Now
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

// We have change again the Original Array Order now in reverse order again
console.log ("Orignal Array Reverse again;",countriesToVisit.reverse());
