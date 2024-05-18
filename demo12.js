//this keyword and arrow function

// const user = {

//     username : "Akash",
//     price : 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, Welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this)

// function chai() {
//     let username = "Aniket"
//     console.log(this.username)
// }

// chai()

// const chai = function() {
//     let username = "Akash"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username = "Amit"
//     console.log(this)
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Abhishek" } + (num1 + num2))

console.log(addTwo(10,20))