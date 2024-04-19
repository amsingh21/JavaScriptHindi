//IFEE Immeditaely Invoked functions expressions 

// when we open the file or load DB connection should be up and running and it should not be polluted 

(function chai (name ){  // this is a named ifee
    console.log(`DB connection is up ${name}`);
}) ("AMita");


((lastanme)=> {                         // this is without name 
    console.log(`DB connection is up ${lastanme}`);
}) ("Singh")
