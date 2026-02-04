// Problem Description – Block Event Loop
//
// In Node.js, long-running synchronous operations block the event loop,
// preventing other tasks (like timers or I/O) from executing.
//
// Your task is to implement a function `blockEventLoop(ms)` that
// synchronously blocks the execution for the given duration.
//
// Requirements:
// 1. Do NOT use `setTimeout` or Promises (those are non-blocking).
// 2. Use a `while` loop with `Date.now()` or `performance.now()`.
// 3. This is a teaching tool to show how NOT to write async code.

function blockEventLoop(ms) {
    const t1 = Date.now()
    let t2;
    if(ms >= 10) {
    while(true){
        t2 = Date.now()
        if((t2-t1)==ms) return
        
    }
}
}

module.exports = blockEventLoop;
