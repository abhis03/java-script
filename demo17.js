const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : "ruby",
    swift : "Swift by apple"
}

//using for in loop iterate the object

for (const key in myObject) {
    //console.log(`Full of ${key} is ${myObject[key]}`)
}

// for (const [key,Value] of myObject) {
//     console.log(key,Value)
// }
//using this loop showing error
// for (const [key,Value] of myObject) {
//     ^

// TypeError: myObject is not iterable
// at Object.<anonymous> (/workspaces/java-script/demo17.js:8:27)
// at Module._compile (node:internal/modules/cjs/loader:1376:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
// at Module.load (node:internal/modules/cjs/loader:1207:32)
// at Module._load (node:internal/modules/cjs/loader:1023:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
// at node:internal/main/run_main_module:28:49

// Node.js v20.11.1

const programming = ["js","CPP","JAVA","NODEJS","React","SpringBoot"]

for (const key in programming) {
    //console.log(key)
    //console.log(programming[key])
}

const coding = ["js","CPP","JAVA","NODEJS","React","SpringBoot"]

coding.forEach( function (val){
    //console.log(val)
})

coding.forEach((char) =>{
   // console.log(char)
})

function printMe(item){
    //console.log(item)
}
//coding.forEach(printMe)

coding.forEach((item, index, arr) =>{
    //console.log(item, index, arr)
})

//how to print object in array

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

myCoding.forEach((user) =>{
    console.log(user.FirstName,user.LastName)
})