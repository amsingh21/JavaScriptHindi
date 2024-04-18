//const creonUser= new Object() // this is singleton object

const creonUser = {} // this lateral object 

creonUser.name= "Sam",
creonUser.address= "Plano",
creonUser.email="sam@gmail.com"

//console.log(creonUser);

const regularUser= {
    email: "jonny@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Amita",
            lastName: "Singh",
            middleName: "Nand"
        }
    },
    addres: "Plano"
}

//console.log(regularUser.fullname?.userfullname.firstName); // access values inside nested obejcts

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}

//const obj3 = Object.assign(obj1,obj2)

//const obj3 = Object.assign({}, obj1,obj2) 

const obj3 = {...obj1,...obj2}  // spreader also does same as assign mostly we will use spreader 

//const obj3 = {obj1 , obj2}


//console.log(obj3);

// Object of an Array

const user1 = [
     {
          id : "1",
          email: "asingh@gmail.com"
    },
    {
        id : "1",
        email: "asingh@gmail.com"
  },
  {
    id : "1",
    email: "asingh@gmail.com"
}
]

//console.log(user1[1].id);

// console.log(creonUser);

// console.log(Object.keys(creonUser)) // this will return keys as array 

// console.log(Object.values(creonUser)); // this will return values as array 

// console.log(creonUser.hasOwnProperty('emailId')); // this method checks if a particular property exists or not use it before using the property based on scenarios 


const course = {
    coursename :"JS In Hindi",
    price: "999",
    courseInstructor : "Amita"
}
// course.courseInstructor 
const {courseInstructor  }= course  // this is the syntax to deconstruct an object 

console.log(courseInstructor);

// When we get JSON object then we can do destructure and use values 
// {
//     "name" : "Amita",
//     "addres" : "Plano,
//     "mobile" :"945-945-9090"
// }

// some time we get API response as array and inside it has json objects 

[
    {},
    {},
    {}
]



