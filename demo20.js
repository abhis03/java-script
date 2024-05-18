const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

const promiseTwo = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resovled")
})

const promiseThree = new Promise(function(resovle, reject){

    setTimeout(function(){
        resovle({username:"Abhishek", email:"abhi03@gmail.com"})
    }, 1000)
}).then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Abhishek", password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
}).then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The Promise is either resovled or rejected"))


const promiseFive = new Promise(function(resovle, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resovle({username:"Nodejs", password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
        
    } catch (error) {
        console.log(error)
        
    }
    
}

consumePromiseFive()