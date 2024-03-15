let guestlist = ["Kashan","Tariq Mehmood","Amir Mehmood","Arslan"];

let dontcome = guestlist[0];

console.log(dontcome, "Nai Ahh Shta");

guestlist.splice(0, 1, "Abban");

guestlist.forEach(Guest => console.log(`Salam ${Guest}, Would u Like to Dinner with me`));
