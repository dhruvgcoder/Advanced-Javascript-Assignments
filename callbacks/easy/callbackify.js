// Problem Description – callbackify(fn)
<<<<<<< HEAD

// You are required to write a function named callbackify that takes a function that returns a Promise.
// The goal is to convert this function into one that follows the callback pattern (error, data) => void.
// The callback should be called with (null, data) when the promise resolves and (error, null) when it rejects.
function callbackify(fn) {
    return function(...args){
        const callback = args.pop()
        fn(...args)
        .then(data => callback(null,data))
        .catch(err => callback(err,null))
    }
=======
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.


function callbackify(fn) {

>>>>>>> upstream/main
}

module.exports = callbackify;
