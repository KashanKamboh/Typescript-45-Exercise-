// Creating a function with parameters which return a values in string
function city_Country ( city : string , country : string) :string {
    return `${city}, ${country}`
}

// Calling a function and print a return value
console.log(city_Country("Karachi","Pakistan"));

console.log(city_Country("Istanmbol","Turkey"));

console.log(city_Country("Tokyo","Japan"));
