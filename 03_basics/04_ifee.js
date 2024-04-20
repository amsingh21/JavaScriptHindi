//IFEE Immeditaely Invoked functions expressions 

// when we open the file or load DB connection should be up and running and it should not be polluted 

(function chai (name ){  // this is a named ifee
    console.log(`DB connection is up ${name}`);
}) ("AMita");


((lastanme)=> {                         // this is without name 
    console.log(`DB connection is up ${lastanme}`);
}) ("Singh")


// Global Excetion phase 
/* 
Global Execution phase 
Memory Creation Phase 
Execution Phase 

Execution of Java Script code happens in three forms 

Global Execution Context
Memory Creation Context
Execution Context 

in Global execution context this keyword is assigned . in browser value for this is windows and in node it is blank 

in Memory execution phase all varaiables are placed with value as undefined and function definition are placed with function .

in execution context values are assigned to variables and for function a new execution context is created with NEW Evnvirnment variable and execution thread 

This new BOX with new environment variable and execution thread  creates a Memory Execution context and Execution Context and works similar as explained in above lines 


and sends value to Global Execution Context and deletes new evn variable plus thread execution box .

in callstack a object enetrs last is deleted first 




*/