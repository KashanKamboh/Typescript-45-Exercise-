//making a Array
var userNames = ["Arslan", "Kashan", "Amir", "Admin", "Abban"];
//Using forEach loop in the array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",  would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
