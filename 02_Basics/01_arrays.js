const myArray = [1,2,3,4,]

const array2 = ["Shaktiman", "Naggraraj"]

const myArray2= new Array(1,2,3,4)

//console.log(myArray[1]); // Imporatant interview question : arrays can be of two 

// array methods 

// myArray.push(6)

// myArray.push(7)

// myArray.pop()

//myArray.unshift(9)

//myArray.shift()

// console.log(myArray.includes(9));

// console.log(myArray.indexOf(9));

// const newArray = myArray.join()
// console.log(myArray);

// console.log(newArray);

// console.log(typeof(newArray))

// ----------------Slice splice ----------

console.log("A ", myArray);

const myArray3 = myArray.slice(1,3)

console.log(myArray3);

console.log("B ", myArray);

const myArray4 = myArray.splice(1,3)



console.log(myArray4);

console.log("C  ", myArray);b// splice changes the original array and slice does not change the original array