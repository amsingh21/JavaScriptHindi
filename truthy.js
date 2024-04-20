const userEmail= []

if (userEmail){
    //console.log("found user email");
}
else {
    //console.log("User Email does not exists");
}

// falsy values 

// false , 0 , -0 , BigInt 0n, "", null , undefined , NaN

// rest all are true 

// truthy values 

// "0" , 'false', " ", [] , {} , function(){}

if (userEmail.length === 0 ){
   // console.log("Array is empty ");
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0 ){
   // console.log("Object is empty");
}

//Nullish Coalescing operator (?? ) : null , undefined 

let val1 ;
val1 = 5 ?? 10 
val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

//console.log(val1);

// Terniary operator 

//condition ? true : false 


const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("price is less than 100") : console.log("Price is greater than 100");;