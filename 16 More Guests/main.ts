// Creating a Guest List Array 
let guestlist = ["Kashan","Tariq Mehmood","Amir Mehmood","Arslan"];

// making variable for those guest who cant come
let dontcome = guestlist[0];

// Print the name of guest who dont  come
console.log(dontcome, "Nai Ahh Shta");

// Add and remove valuse from guest List array
guestlist.splice(0, 1, "Faizan");

// Message Print for bigger table 
console.log(" Good News ! We have found a bigger Table for dinner ");

// Addind a new value   at starting index of array 
guestlist.unshift("Ali");

// Adding a new value at ending index of array
guestlist.push("Sajad Ali");

// adding a new value at middleindex of array 
let middleindex: number = Math.floor(guestlist.length / 2);

guestlist.splice(middleindex, 0, "Osama");

console.log( "Update List of our guest");

guestlist.forEach(oneguest => console.log( `salam ${oneguest}, would you like to dinner with me`));

