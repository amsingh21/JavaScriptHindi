// Two ways to declare object one is singleton and another is literal 

//Obejcts.create this calls constructor and is singleton 

// other way is constant lietral inside { } we can pass any data type and define as key value pair 

const mySym = Symbol("KeyValues1");

const JSUser = {
    name:" Amita",
    email: "amita@google.com",
    [mySym]: "keyValues2",
    "full name": "Amita Singh",
    isLoggedIn: false,
    loggedInDays: ["Monday", "Wednesday"]

}

// how to access object thre are two ways one is using dot and other is using [and keeping values inside barckets in quotes]

// console.log(JSUser.email); 

// console.log(JSUser["name"]);

// console.log(JSUser["full name"]);

// console.log(JSUser[mySym]);

JSUser.email="amita@yahoo.com"

//Object.freeze(JSUser)

JSUser.email = "amita@ibm.com"

// console.log(JSUser);

JSUser.greetings = function (){
 console.log("Hello this is JS User");
}

console.log(JSUser.greetings());

JSUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this.name}`); // to access prorperties from  current object using this key word 
}

console.log(JSUser.greetingsTwo());