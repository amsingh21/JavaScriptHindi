// if 
// const isUserLoggedIn = true
const temperature = 41

// if( 2 == "2"){

//     console.log("Executed");

// }

// if( 2=== "2"){
//     console.log("Executed");
// }

// if( 2 != 3){
//     console.log("Executed");
// }

// if (temperature <50){
//     console.log("If Temperature is less than 50 ");
// }

// if(temperature === 40){
//     console.log("Temperature is 41 ");
// }
//  else {
//     console.log("Temparture is greater than 50");

//  }

// const score = 200

// if (score > 100){
//     let power = "Fly"
//     console.log(`User Power :  ${power}`);
// }

//console.log(`User Power:  ${power}`); // this will throw an error variable not defined because of scope in if block 
//conditions 
//< ,> , <=, >= , ==, != , ===

// const balance = 1000

// // if (balance > 500) console.log("The balance is greater than 500"), //implicit scope 
// // console.log("test"); 

// if (balance < 500){
//     console.log("The balance is less than 500");
// }

// else if (balance <750){
//     console.log("The balance is less than 1000");
// }

// else if(balance < 950){
//     console.log("The balance is less than 1000");
// }

// else {
//     console.log("The balance is less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true 
const loggedInFromGoogle= false
const loggedInFromEmail = true

// if (isUserLoggedIn  && debitCard && 2 == 3){
//     console.log("Allow to buy the course ");
// }

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow login to user");
}

