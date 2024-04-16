// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);

// console.log("2" >1);
// console.log("2" <1);
// avoid such compariosn where data types are different
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0); // equality and comparion operator works differently in JS in line no 12 null i sgetting converted as 0 hence it is evaluating as true 

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined > 0);

// === strict check 

console.log("2" ===2);