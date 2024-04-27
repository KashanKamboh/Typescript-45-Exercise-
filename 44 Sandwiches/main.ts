//Define a function with a rest parameter that accepts the items argument representing our sandwhiches
function makeSandwhiches(... items : string[]){
    
    console.log("\n Making a sandwhiches with the following items \n ");

    items.forEach(singleItems => console.log(singleItems));
   
    console.log("\n Now Enjoy Sandwhiches\n");
}

//Call the function three times with different number of arguments
makeSandwhiches( "Chicken","Butter", "Lettuce", "Egg");

makeSandwhiches("Bread","Butter");

makeSandwhiches("Bread","Cheese","Beef","Egg", "Tomato" , "Onion");