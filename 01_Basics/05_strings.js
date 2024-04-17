const name= "Amita"

const repoCount = 50 

//console.log(name + repoCount + " Value"); // this is not readable approach so avoid writing code like this 

//console.log(`Hello my name is ${name} and my total repo coiunt is ${repoCount}`);

const gameName = new String("PlaywithMily") // another way to use string data type 

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('a'));

 //const newString = gameName.substring(0,4)

// console.log(gameName.length);

// const str1= gameName.slice(-6,2)
// console.log(str1);
//  //console.log(newString);

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -6);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""


const newString1 = new String("  AMita   ")

console.log(newString1.trim());


const url = "https://amitasingh.com/amita%20page"

console.log( url.replace("%20","-"))

console.log(url.includes("amita"));

console.log(url.split("%"));

 //console.log(anotherString)
// console.log(str);
