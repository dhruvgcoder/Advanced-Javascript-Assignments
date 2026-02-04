// Problem Description – rejectAfter(ms)

// You are required to create a function named rejectAfter that accepts a time duration in milliseconds. 
// The function should return a Promise that waits for the specified time and then rejects.

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
    
}

module.exports = rejectAfter;

