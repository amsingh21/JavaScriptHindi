const myDate = new Date()

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toUTCString());

// console.log(typeof myDate);

//let crateMyDate = new Date(2023,0,17)
//let crateMyDate = new Date(2023,0,17,5,40,20)
// let crateMyDate = new Date("2023-01-20")
let crateMyDate = new Date("03-31-2024")

//console.log(crateMyDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(crateMyDate.getTime());

//console.log(Math.floor(Date.now()/1000))  // Important for Interview question and converts value in seconds 

let newDate = new Date()

console.log(newDate.getMonth() +1);

//`${newDate.getDate()} and the time is `

newDate.toLocaleString('defualt',{
    weekday :"long"
})

//console.log(crateMyDate.toDateString());

