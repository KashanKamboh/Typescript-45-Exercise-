// Define the function to show magicians names
function show_magicians(magicians : string[]){
    magicians.forEach(name=> console.log(name));
}
//function to make magicians great through .map() it will modify
function make_great(magicians : string[]){
    return magicians.map( name => `The Great ${name}`);
}
//make a Array  that show magicians names
let magicians_names = ["Harry porter","Arslan","Abban"];

//Making a copy of orignal array through .slice() function
let copy_magicians_names = magicians_names.slice()

//modify the copied Array to include "The Great"with teir names
let copy_great_magicians = make_great (copy_magicians_names);

//show bot arrays orignal and copies

//Orignal
console.log("Orignal Array \n");
show_magicians(magicians_names);

// copied
console.log( "Copied Array \n");
show_magicians(copy_great_magicians);









