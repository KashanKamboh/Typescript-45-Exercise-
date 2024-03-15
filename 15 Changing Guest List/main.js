var guestlist = ["Kashan", "Tariq Mehmood", "Amir Mehmood", "Arslan"];
var dontcome = guestlist[0];
console.log(dontcome, "Nai Ahh Shta");
guestlist.splice(0, 1, "Abban");
guestlist.forEach(function (Guest) { return console.log("Salam ".concat(Guest, ", Would u Like to Dinner with me")); });
