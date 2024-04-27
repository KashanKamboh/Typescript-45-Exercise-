let userNames = ["Kashan","Arslan","Amir","Zeeshan","Abban"];

userNames = [];

if(userNames.length === 0){
    console.log("Your Array is empty we need to find some users");
}else{
    //Using forEach loop in the array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
            console.log(`Hello ${oneUser},  would you like to see a status report?`);
    }else{
    console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
    })
}