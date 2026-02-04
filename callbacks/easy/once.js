// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

<<<<<<< HEAD
// You are required to implement a wrapper function named once that accepts an asynchronous function fn.
// The wrapper should ensure that fn is executed only on the first call.
// Any subsequent calls must not re-execute fn and should instead return the same Promise or resolved result from the first invocation.
// function once(fn) {
//     let promise;
//     return function (...args) {
//         if (promise) return {promise,callback}
=======
function once(fn) {

}
>>>>>>> upstream/main

//         promise = new Promise((resolve, reject) => {
//             const callback = args.pop();
//             fn(...args,(err,data)=>{

//                 if (data) {
//                     callback(null,data)
//                     resolve(data)
//                 }
//                 else {
//                     callback(err,null)
//                     reject(err)
//                 }
//             })
            

//         })
//         return promise
//     }
// }


function once(fn){
    let promise ;
    return function(...args){
        
        let cb = args.pop()

        if(promise){
            promise
            .then(
                data => cb(null,data)
            )
            .catch(
                err => cb(err,null)
            )
            return
        }

        promise = new Promise((resolve,reject)=> {
            fn(...args,(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            }
        )
    }
    )
    promise
    .then(data=> cb(null,data))
    .catch(err=>cb(err,null))
    }
}
module.exports = once;
