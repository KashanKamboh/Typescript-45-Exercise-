//Define an Array to print each magician name from the array;
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define function to make magicians great through .map()it will modify Array
function make_great(magicians) {
    return magicians.map(function (name) { return ("The Great ".concat(name)); });
}
//Define an Array containing magicians names;
var magiciansNames = ["Harry Porter", " Arslan", "Abban"];
//Call make great function to modify magicians names
var great_magicians = make_great(magiciansNames);
console.log(great_magicians);
// call show_magicians that show modify list of magicians
show_magicians(great_magicians);
