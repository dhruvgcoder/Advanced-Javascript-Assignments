// Problem Description – retryOnce(fn)
//
// You are given a function `fn` that returns a Promise.
// Your task is to return a new function that calls `fn` and retries it once
// if the first attempt rejects.
// If the second attempt also rejects, the error should be propagated.

<<<<<<< HEAD
// You are given an asynchronous function fn. 
// Your task is to return a new function that calls fn and retries it once if the first attempt fails. 
// If the second attempt also fails, the error should be properly propagated. 

function retryOnce(fn) {
    let attempted = false;
    return function (...args) {
        const cb = args.pop()

        function tries() {
            fn(...args, (err, data) => {

                if (!err) return cb(null, data)
                if (attempted) return cb(err, null)
                attempted = true
                tries()

            })
        }
        tries()

    }
=======

function retryOnce(fn) {
>>>>>>> upstream/main

}

module.exports = retryOnce;
