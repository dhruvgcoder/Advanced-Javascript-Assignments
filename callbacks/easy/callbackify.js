// Problem Description – callbackify(fn)

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
}

module.exports = callbackify;
