// let a = 10
// const b = 20
// var c = 30

//var c = 300

let a = 300

if(true){
    let a = 10
   const b = 20

   //console.log("Inner value of a is ", a);  // this is called block scope 
 
}
//console.log(a); // this is called global scope 
 //console.log(b);
//console.log(c);

function one(){
    const username ="Amita"

    function two(){
        const website = "Youtube"

        console.log(username);
    }

    //console.log(website);

    two()
}

//one()

if (true){
    const username = "Amita"

    if(username == "Amita"){
        const website = "Youtube"
       // console.log("user " ,username, " is on website ", website);

    }

    //console.log(website); // note website and username varaible could not be prinited using console because they are out of scope of if block hence these lines no 45 and 48  are commented 
}

//console.log(username);


//----------------------important ---------------------------
addone(5)  // since this is a direct function and not assigned to any variable hence addone () call order will not throw any error 
function addone(num){
    return num + 1
}

  
addTwo(5)  // this will trhow error as it is called before its initialization 
  const addTwo = function addTow(num){   // this function is called as expression 
    return num +1 
  }

 