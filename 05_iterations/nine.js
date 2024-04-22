const myNums = [1,2,3]
 
// const myTotal = myNums.reduce( function (acc , currVal) {

//     console.log(`acc : ${acc}  curval :- ${currVal}`);
//     return acc +currVal

// } , 0)

const myTotal = myNums.reduce( (acc , curr)=>  acc + curr,0)


console.log(myTotal);

const shoppingCart = [
    {
        item: "JS Course",
        price: 299,

    },
    {
        item: "Data Science",
        price: 12299,

    },
    {
        item: "App Development",
        price: 2299,

    },
    {
        item: "Python Course",
        price: 1299,

    }
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)

console.log(priceToPay);