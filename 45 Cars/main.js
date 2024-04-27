"use strict";
//Define a function to creat a car object with optional options
function creat_car(manufacturer, models, ...options) {
    //Initialize a car object with manufacturer and models
    let car = {
        manufacturer: manufacturer,
        models: models,
    };
    //Add aditional options to the car object
    options.forEach(option => {
        let { key, value } = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to creat the car object
let my_car = creat_car("Toyota", " Corolla", "Colour: Black", "Sunroof : True", "Year : 2024");
//Print the valriable to ensure that all the informationis store correctly in the cat object
console.log(my_car);
