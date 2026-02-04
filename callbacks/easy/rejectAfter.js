// Problem Description – rejectAfter(ms, callback)
//
// You are required to create a function named rejectAfter that accepts a time
// duration in milliseconds and a callback function.
// The function should wait for the specified time and then invoke the callback
// with an error.

function rejectAfter(ms, callback) {

<<<<<<< HEAD
function rejectAfter(ms, callback) {
    const promise =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const err = new Error(`Rejected after ${ms}ms`)
            callback(err,null)
            reject(err)
        },ms)
    });
    
    if(callback) promise.catch(()=>{})
        
return promise
    
=======
>>>>>>> upstream/main
}

module.exports = rejectAfter;

