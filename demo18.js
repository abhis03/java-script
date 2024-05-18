const myNums = [1,2,3,4,5,6,7,8,9,10]
const newnu = []

myNums.forEach( (num) =>{
    if(num > 4){
        newnu.push(num)
    }
})
//console.log(newnu)

const newNums = myNums.filter((num) => num > 4)
//console.log(newNums)

const newnum = myNums.filter((num) => {
    return num > 4
})
//console.log(newnum)

const myCoding =[
    {
        FirstName:"Akash",
        LastName:"Desai"
    },
    {
        FirstName:"Aniket",
        LastName:"Desai" 
    },
    {
        FirstName:"Rohit",
        LastName:"Desai" 
    }
]

const userName = myCoding.filter((nm) => nm.FirstName === 'Akash')
console.log(userName)