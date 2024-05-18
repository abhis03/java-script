//map
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//onst newNums = myNumbers.map((num) => { return num + 10})

const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)

//console.log(newNums)

//reduce

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0)
//console.log(myTotal)

const ShoppingCart =[
    {
        ItemName:"Mango",
        Price:100
    },
    {
        ItemName:"Apple",
        Price:200
    },
    {
        ItemName:"Orange",
        Price:150 
    }
]

const totalPay = ShoppingCart.reduce((acc,item) => acc + item.Price, 0)
console.log(totalPay)