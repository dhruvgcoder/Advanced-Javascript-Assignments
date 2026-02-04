// Problem Description – Retry Async Function Once

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

}

module.exports = retryOnce;
