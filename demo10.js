//Function

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(5,5)

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(6,6)
//console.log("result:",result)


function loginUserMessage(username){

    return `${username} Just logged in`
}

//console.log(loginUserMessage("Abhishek"))


function loginUserMessage(username){

    if(!username){
        console.log("Plesae Enter a Username")
        return
    }

    return `${username} Just logged in`
}

//console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,500,1000,40))

const user = {

    name:"Abhi",
    price:"999"
}

function handleObject(myobject){
    return `My name is ${myobject.name} and price is ${myobject.price}`
}

//console.log(handleObject(user))

const result1 = handleObject({
    name:"Akash",
    price:399
})

console.log(result1)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))
