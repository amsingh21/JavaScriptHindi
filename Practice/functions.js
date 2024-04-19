function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log( calculateCartPrice(200,300,400,2000))

const user = {
    name: "Amita",
    age: 18,
    isLoggedIn: false
}

function hanleObject(anyObject){
    //console.log(`User's  ${anyObject.name}  logged in status is ${anyObject.isLoggedIn}`);
}

//hanleObject(user) we can pass object also 

hanleObject({
    name:"Amita",
    isLoggedIn: false
})

//paasing an array in function 

const myNewArray =[10,20,30,40]

function returnNewValue(getArray){
    return getArray[1]
}

// console.log( returnNewValue(myNewArray))

console.log(returnNewValue([10,20,30]));