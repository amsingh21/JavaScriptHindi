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

//console.log(userLoginMessage("Amita"))

//console.log(userLoginMessage()); // when no value is passed in the arguments then it returns as undefined not null , null is returned when empty string is passed 

//console.log(userLoginMessage(""));

// addTwoNumber(3,"5")


// va;1 and va; 2 will take first two values passed in function call and rest will store in num as array Important Interview 
function calculateCartPrice(val1,val2,...num1){
    return num1   
}

//console.log(calculateCartPrice(200,300,400,500)); // adding ... in function argumnet will stroe all values passed when function is called inarray form 
const userName = {
    name: "Amita",
    price: 399
}
function handleObject (anyObject){
   // console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`);
}



// handleObject(userName)

handleObject(  {
    name: "Amita",
    price: 599
})

const myNewArray = [10,30,20]

function returnedSecondValue(myArray){
    return myArray[1]
}

//console.log(returnedSecondValue(myNewArray));

console.log(returnedSecondValue([20,40,50]));

