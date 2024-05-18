const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Abhi"
tinderUser.email = "abhi03@gmail.com"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "abhi03@gmail.com",
    fullName: {
        UserFullName: {
            firstname : "Akash",
            lastname : "Patil"
        }
    }
}

//console.log(regularUser.fullName.UserFullName.lastname)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    }
]

// console.log(users[2].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {

    coursename : "NodejS",
    price : "999",
    courseInstructor:"Amol"
}

const {price} = course
console.log(price)