// Problem Description – fetchWithTimeout(url, ms)

// You are required to write a function named fetchWithTimeout that accepts a URL and a time limit in milliseconds. 
// The function must return a Promise that attempts to fetch data from the given URL.
// If the request completes within the specified time, the Promise resolves with the fetched data. 
// If the operation exceeds the time limit, the Promise rejects with the message "Request Timed Out".

function fetchWithTimeout(url, ms, callback) {
    return new Promise((resolve, reject) => {
        let lockState = false;

        setTimeout(() => {
            if (lockState) return
            lockState = true;
            const err = "Request Timed Out"
            callback(err, null)
            resolve(err) 
        }, ms)

        fetch(url, (err, data) => {
            if (lockState) return
            lockState = true
            
            if (err) {
                callback(err, null)
                resolve(err)
            }
            else {
                callback(null, data)
                resolve(data)
            }
        })
    })
}

module.exports = fetchWithTimeout;
