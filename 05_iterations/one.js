// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i
    if(element ===5){
      //  console.log("5 is best number ");
    }
    //console.log(element);
}

for (let i = 1; i <=10; i++) {
    //console.log(`The outer loop : ${i}`);
    for (let j = 1; j <=10; j++) {
       //console.log(`The inner loop ${j} and outer loop ${j}`);
       //console.log(i + '*' + j + ' = ' + i*j);
    }
    
}
//console.log(i);
let myArray = ['Flash' ,'Batman' , 'Superman']
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {  // array does not throw array out of bound exception 
    const element = myArray[index];
   // console.log(element);
    
    }


    //break and continue 

    // for (let index = 1; index <= 20; index++) {
    //     const element = index
    //     if (element ===5 ){
    //         console.log(`value of element is ${index}`);
    //         break;
    //     }
    //    console.log(`value of element is : ${index}`);
        
    // }

    for (let index = 1; index <= 20; index++) {
        const element = index
        if (element ===5 ){
            console.log(`Deteced 5`);
            continue;
        }
       console.log(`value of element is : ${index}`);
        
    }