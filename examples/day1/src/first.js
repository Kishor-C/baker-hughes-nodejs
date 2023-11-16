console.log('first line => 1');
// performing asynchrnous operations
// fs module, http, express, tcp, timer
// setTimeout(callbackFn, time);
setTimeout(() => {
    console.log('second line => 2')
}, 0);
console.log('third line => 3');