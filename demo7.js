//Array

const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
//console.log(marvel_heros[3][1])

// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros)

//spread operator
// const allNew_heros = [...marvel_heros, ...dc_heros]
// console.log(allNew_heros)

const another_array = [1,2,3,4,[5,6,7],[8,9,0]]

const real_another_Array = another_array.flat(Infinity)
console.log(real_another_Array)

console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))

console.log(Array.from({name: "Abhishek"}))//intersting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))
