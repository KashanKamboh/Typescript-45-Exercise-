//making a Array
let userNames = ["Arslan","Kashan","Amir","Admin","Abban"];

//Using forEach loop in the array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
            console.log(`Hello ${oneUser},  would you like to see a status report?`);
    }else{
    console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
    })