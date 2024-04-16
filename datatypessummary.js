// important for interview 

// primitive data types 
// 7 categories : String , Number , boolean , null , undefined , Symbol ( to make a vlaue as unique), BigInt

const score = 100

const scorevalue = 100.3

const isLoggedIn = false

const outsideTemp = null


let userEmail 

const id = Symbol('123')

const anotherId= Symbol('123')


//console.log(id == anotherId);

const bigNumber = 34567788987

//console.log(bigNumber);

//console.log(typeof(bigNumber));
//console.log(typeof(outsideTemp)); // returns data type as object

// Reference type or non Primitive type : Arrays , Objects , Functions 

const heros = ["batman", "Cpatain America", "Bruce"]

let myObj = {
     name : "Amita",
     age : 26,
     country : "usa" ,
}

 const myFunction = function() {
   // console.log("Hello World ");
 }

 // to find out data type 

 //console.log(typeof (outsideTemp));

 //console.log(typeof(myFunction)); // object function data type of function 

 //console.log(typeof(myObj)); // Non primitive data types always return data type as Object 


 //++++++++++++++++++++++++++++++++++++++  Stack Memory  and Heap Memory +++++++++++++++++++++++++++++++++++++++++++

 // Stack memory  => Primitive is used in primitive data type  here copy is created 
 // Heap memory => Non Primitive  is used  by non primitive data type  here reference is created 

 let myYoutubeName = "codewithMily"

 let anotherName = myYoutubeName

   anotherName = "codewithAmita"

//  console.log(anotherName);
//  console.log(myYoutubeName);

 let userOne=  {
    email : "userone@gmail.com",
    upi: "usa123@ybl.com"
 }

 let userTwo = userOne

 userTwo.email = "amita@google.com"

 console.log(userTwo.email);
 console.log(userOne.email);