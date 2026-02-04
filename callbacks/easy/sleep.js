// Problem Description – sleep(ms, callback)
//
// You are required to write a function named sleep that accepts a time duration
// in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback.

<<<<<<< HEAD
// You are required to write a function named sleep that accepts a time duration in milliseconds. 
// The function should return a Promise that pauses execution for the given amount of time and then resolves.
function sleep(millis, callback) {
    let promise = new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve();
        },millis)
    })
    promise.then(
        data => callback(null,data)
    )
    return promise
=======
function sleep(millis, callback) {

>>>>>>> upstream/main
}

module.exports = sleep;

