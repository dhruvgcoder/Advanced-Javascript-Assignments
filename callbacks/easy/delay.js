// Problem Description – delay(ms, value, callback)
//
// You are required to write a function named delay that takes a time duration
// in milliseconds, a value, and a callback function.
// The function should wait for the given time and then invoke the callback
// with `null` as the first argument and the provided value as the second argument.

<<<<<<< HEAD
// You are required to write a function named delay that takes two parameters: a time duration in milliseconds and a value. 
// The function should return a Promise that waits for the given time and then resolves with the provided value.

function delay(ms, value,callback) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            callback(null,value);
            resolve(value);
        },ms)
    })
}

module.exports = delay;
=======
function delay(ms, value, callback) {
   
}
  
module.exports = delay;
>>>>>>> upstream/main
