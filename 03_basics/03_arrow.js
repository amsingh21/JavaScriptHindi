const user = {
    username : "Amita",
    price: 199,

    welcomeMessage: function (){ 

        //console.log(`${this.username} , welcome to website`);
        //console.log(this);


    }
}


user.welcomeMessage(this)

// user.username = "Shiv"

// user.welcomeMessage()

//console.log(this ); // in console it prints windows object and in node it print empty object 

// function chai (){
//     const username = "Amita"
//     console.log(this.username);  // it will print undefined 
// }
// chai()

// const chai = function (){
//      const username = "Amita"
//     console.log(this.username)  // it will print undefined 
// }
 //chai()

//  const chai = () => {
//     const username = "Amita"
//     console.log(this.username);  // it will print undefined 
//     console.log(this); // it will print empty
//  }

//  chai()

//--- Arrow function 

// const addTwoNumber = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumber(3,4)); 

// const addTwoNumbers = (num1 , num2)=>  num1 + num2 // implicit return  no return and {} needed 

// const addTwoNumber =(num1,num2) => (num1 + num2)

// console.log(addTwoNumbers(3,5))

const addTwoNumber = (num1 , num2) => ({ username: "Amita"})

console.log(addTwoNumber(3,4))
