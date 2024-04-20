const userEmail= []

if (userEmail){
    console.log("found user email");
}
else {
    console.log("User Email does not exists");
}

// falsy values 

// false , 0 , -0 , BigInt 0n, "", null , undefined , NaN

// rest all are true 

// truthy values 

// "0" , 'false', " ", [] , {} , function(){}

if (userEmail.length === 0 ){
    console.log("Array is empty ");
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0 ){
    console.log("Object is empty");
}