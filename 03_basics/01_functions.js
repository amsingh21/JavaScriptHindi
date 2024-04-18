// function addTwoNumber(number1, number2){
 
//   console.log( number1 + number2);

 
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3,5);

// console.log("Result: " +result);

//addTwoNumber(3,5)

//addTwoNumber(3,null)

// addTwoNumber()

// addTwoNumber(3,"a")

function userLoginMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter user name");

    //     return
    // }

    if(!username){
        console.log("Please enter user name");

        return
    }
    return `${username} Just logged in`
}

console.log(userLoginMessage("Amita"))

//console.log(userLoginMessage()); // when no value is passed in the arguments then it returns as undefined not null , null is returned when empty string is passed 

//console.log(userLoginMessage(""));

// addTwoNumber(3,"5")