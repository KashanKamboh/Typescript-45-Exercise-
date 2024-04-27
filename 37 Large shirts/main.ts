// Making a functio

function make_Shirt(size: string = "Large",  printMessage: string = "I Love TypeScript") {

    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`);
}

//Calling a function with by-default values
make_Shirt();

// calling a function now with medium and by-default values

make_Shirt("medium");

// calling function now with small size and different  message print

make_Shirt("small","Code with Kashaf");
    