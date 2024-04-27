//Creating a function
function City(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling the function 
City("Karachi");
City("Lahore");
City("Istambol", "Turkey");
