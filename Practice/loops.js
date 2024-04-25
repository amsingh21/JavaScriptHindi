const myArray= [1,2,3,4]

for (const num of myArray) 
{
 // console.log(num);    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(greet);
    
}

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('UK',"United Kingdom")
map.set('IN',"India")
//console.log(map);

for (const [key, value] of map) {
    //console.log(key , ":-", value) ;
    
}

// const myObject = {
//     'name' : "AMmita",
//     'addres' : " USA"
// }
// for (const [key,value] of myObject) {
//     //console.log(key,":-", value);
    
// }

const myObject = {
    js: "javascript",
    rb: 'ruby',
    py: 'python',
    java: "JAVA",
    switft: "Swift by Apple"

}

for (const key in myObject) {
   // console.log(myObject[key]);
   
}

const myArray2 = ['js', 'py', 'java','ruby']

for (const key in myArray2) {
    //console.log(myArray2[key]);
    
}

const coding = ["js","py","java","rb"]

coding.forEach( function (val){
    //console.log(val);

})

coding.forEach( (item)=> {
    //console.log(item);
})


function printMe(item){
    //console.log(item);
}

coding.forEach(printMe)

const myArray3= [
    {
        programmingName: "javascript",
        programmingFileName: 'js'
    },
    {
        programmingName: "java",
        programmingFileName: 'java'
    }
    
]


myArray3.forEach( (item)=> {
   // console.log(item.programmingFileName);

})
myArray3.forEach((item,index,list) =>{
   // console.log(item ,index,list);
})

const newNums = [1,2,3,4,5,6,7,8,9,10]

// const mynewNums = newNums.forEach( (num)=> (console.log(num))) // for each does not return any values 

// console.log(mynewNums);

//const mynewNums= newNums.filter( (num)=> (num>4))

// const myNewNums = []

// newNums.forEach( (num)=> {
//     if (num > 4){
//         myNewNums.push(num)
//     }
// })

// console.log(myNewNums);

const newNum2= [1,2,3,4,5,6,7,8,9,10]

// const myNewNum2 = newNum2.map( ( num)=> { return  num + 10 })

// console.log(myNewNum2);

// const myNewNum2 = newNum2
//                 .map( (num) => (num * 10))
//                 .map( (num) => (num+1))
//                 .filter( (num)=> (num >40))

// console.log(myNewNum2);

const myNewNum2 = newNum2.reduce( function (acc, currVal){
    return acc+ currVal
},0)

console.log(myNewNum2);