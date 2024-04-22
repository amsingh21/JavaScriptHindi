const myObject ={
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
  //console.log(key);

 // console.log(myObject[key]);

 //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb","java","cpp"]

for (const key in programming) {
   //console.log(key);
  // console.log(programming[key]);
}

// const map = new Map()

// map.set('IN', 'INDIA')
// map.set('UK', 'United Kingdome')
// map.set('USA', 'United States of America')

// for (const key in map) {   // since map is not iteratroable hence this for in loop will not work for maps
//     console.log(key);
// }
