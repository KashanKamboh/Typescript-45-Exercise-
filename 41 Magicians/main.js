//Define an Array to print each magician name from the array;
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an Array containing magicians names;
var magiciansNames = ["'Harry Porter", " Arslan", "Abban"];
//Calling the function to print each magicians name;
show_magicians(magiciansNames);
