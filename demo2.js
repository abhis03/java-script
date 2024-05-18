//Compare

// console.log(1 > 2)
// console.log(2 < 5)
// console.log(3 >= 4)
// console.log(4 <= 7)
// console.log(5 == 5)

// console.log("2" > 1)
// console.log("02" < 5)

//Primitive and Non-Primitive Data-Type
//There are 7 Primitive data type
//String,Number,Boolean,null,undefined,symbol,BigInt

// const score = 100
// const name = "Akash"
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsidetemp = null
// let userEmail;

//Symbol in JavaScript provides a way to create unique identifiers, which is useful for avoiding naming collisions and creating private members in objects.
// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id === anotherid)

//Reference(Non-Primitive)

//Array,Objects,Function

// const hero = ["Shaktiman","naagraj","doga"]

// let myObj = {
//     name:"Abhishek",
//     age:25,
// }

// const myFunction = function(){
//     console.log("Hello World...");
// }
// myFunction()
//console.log(myFunction())

//Stack Memory-(Pass-copy)-(Primitive), Heap(Pass refrenece)-(Non-Primitive)

// let myYoutubename = "Abhishek@youtubedotcom"

// let anothername = myYoutubename
// anothername = "akash"
// console.log(myYoutubename)
// console.log(anothername)

let userOne = {
    name:"Abhi",
    age:23,
}

let usertwo = userOne
usertwo.name="Abhishek"
console.log(usertwo)
console.log(userOne)