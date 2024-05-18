//Object Litterle

const mySym = Symbol("Key1")

const JUser = {
    name : "Abhishek",
    age : 18,
    "Full name":"Abhishek Bidkar",
    [mySym]:"myKey1",
    location : "Goa",
    email : "abhishek@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Monday"]
}

// console.log(JUser.name)
// console.log(JUser["email"])
// console.log(JUser["Full name"])
// console.log(JUser[mySym])

// JUser.email = "akash03@gmail.com"
// Object.freeze(JUser)

// JUser.email = "AK002@gmail.com"
// console.log(JUser)

JUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JUser.greeting())

JUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JUser.greetingTwo())