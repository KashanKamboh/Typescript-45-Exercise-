//Define variables
var apple = "Apple";
var Uppercaseapple = "APPLE";
var five = 5;
var fifteen = 15;
var vegetables = ["Onion", "Tomato", "Potato"];
// Test for equality and inequality with strings
console.log("Is apple is equal to Apple");
console.log(apple == "Apple");
console.log("\nIs apple is not equal to Apple");
console.log(apple != "Apple");
// Test using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(Uppercaseapple.toLocaleLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(Uppercaseapple.toLocaleLowerCase() != "apple");
//Numericals tests
//equals to
console.log("\n Is five is equals to fifteen?");
console.log(five == fifteen);
// not equals
console.log("\n Is five is not equals to fifteen?");
console.log(five != fifteen);
// Greater than
console.log("\n five is greater than 0");
console.log(five > 0);
//less than
console.log("\n fifteen is less than five");
console.log(fifteen < five);
//Greater than or equals to
console.log("\n five is greater than or equals to 2");
console.log(five >= 2);
//less than or equals to
console.log("\n fifteen is less than or equals to five");
console.log(fifteen <= 5);
// Test using "and" & "or" operators
//using "and"
console.log("\n fifteen is not equal to five and fifteen is greater than five");
console.log(fifteen != 5 && fifteen > 5);
console.log("\n five is not equal to ten and five is greater than 10");
console.log(five != 5 && five > 10);
//using "or"
console.log("\n 12 is greater than 15 or 12 is equals to 12");
console.log(12 > 15 || 12 == 12);
console.log("\n 12 is greater than 15 or 12 is not equals to 12");
console.log(12 > 15 || 12 != 12);
//test whether an item is includes in array
console.log("\n is Tomato is includes in my vegetables array");
console.log(vegetables.includes("Tomato"));
console.log("\n Is potato is not includes in my vegetables array");
console.log(!vegetables.includes("Potato"));
