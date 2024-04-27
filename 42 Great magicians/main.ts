//Define an Array to print each magician name from the array;
function show_magicians(magicians){
    magicians.forEach(name=> console.log (name));
}

//Define function to make magicians great through .map()it will modify Array

function make_great(magicians :string[]){
 return magicians.map(name => (`The Great ${name}`));
}

//Define an Array containing magicians names;

let magiciansNames = ["Harry Porter"," Arslan", "Abban"];

//Call make great function to modify magicians names

let great_magicians = make_great(magiciansNames);

//  call make_great that show modify array of magicians

console.log(great_magicians);

// call show_magicians that show modify list of magicians

show_magicians(great_magicians);