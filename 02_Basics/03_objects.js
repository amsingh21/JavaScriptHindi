// singleton 
// object.create 


// object literals 
// question use symbol in object as key 
const mySym = Symbol("key1")

const JsUser = {
    name: "Amita",
    "full name": "Amita Singh",
    age: 18,
    [mySym]: "myKey1",
    location: "Dallas",
    email: "amita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// to access object 

// console.log(JsUser.email); 
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "amita@yahoo.com"
Object.freeze(JsUser)
JsUser.email = "amita@amazon.com"

// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS User");

}

console.log();