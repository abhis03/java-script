//scope--{}
let a = 200

if(true){
    let a = 100
    const b = 200
    //var c = 300
    //console.log("Inner:",a)
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
   
    two()

}
one()


if(true){
    const username = "abhishek"

    if(username === "abhishek"){
        const website = "YouTube"
        console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)


console.log(addTwo(5))
function addTwo(num){
    return num + 1
}



const addOne = function(num){
    return num + 2
}
console.log(addOne(10))

