// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    
    
    // if (greet ===" "){
    //     break
    //     continue
    // }
    //console.log(`the charters are ${greet}`);
}

const map = new Map()

map.set('IN', 'INDIA')
map.set('UK', 'United Kingdome')
map.set('USA', 'United States of America')


//console.log(map);
for (const [keys ,value] of map) {
    

    //console.log(keys +':-'+ value);
}

const myObject = {
    game1: "NFS",
    game2: "MARIO"
    
}

for (const [keys,value] of myObject) 

{
    console.log(keys +':-'+ value);
}