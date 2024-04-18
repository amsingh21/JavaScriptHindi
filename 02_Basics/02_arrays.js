const marvel_heros = ["Thor", "Captain America", "SpiderMan"]

const dc_heros = ["Batman", "Flash", "Superman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allHeros= marvel_heros.concat(dc_heros)

 //console.log(allHeros);

// console.log(marvel_heros);

const all_newHeros = [...marvel_heros, ...dc_heros]

//console.log(all_newHeros);

const another_Array = [1,2,3,4,[5,6,7],8,[9,10,[4,5]]]

const usable_another_Array= another_Array.flat(Infinity)

//console.log(usable_another_Array);


//console.log( Array.isArray("Amita"));

//console.log( Array.from("Amita"));

 console.log(Array.from({name : "Amita"})); //Imporatnt 

let score1 = 100
let score2 = 200
let score3=300


//console.log(Array.of(score1,score2,score3));

//study about arrays 