//Creating a variables
let age = 100;

//Creating a program for Determining the stages of life using else-if chain
if(age < 2){
    console.log("you are a baby");
}
else if(age >= 2 && age < 4){
    console.log("you are a toddlers");
}

else if(age >= 4 && age < 13){
    console.log("you are a Kids");
}

else if(age >= 13 && age < 20){
    console.log("You are a Teenagers");
}

else if(age >= 20 && age < 65){
    console.log("you are an Adults");
}

else if(age >= 65 ){
    console.log("you are Elders");
}