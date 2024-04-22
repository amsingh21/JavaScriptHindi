const coding = ["js", "cpp", "rb", "python","java", "scala"]

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index , arr) => {

//     console.log(item , index  , arr);

// })


const myCoding = [
    {
        programmingLanguage : "javascript",
        programmingFileName:"js"
    },
    {
        programmingLanguage : "java",
        programmingFileName:"java"
    } ,
    {
        programmingLanguage : "python",
        programmingFileName:"py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.programmingLanguage);
})
