console.log('b module starts');
exports.done = false;
let a = require('./a.js');
console.log('inside b module, a.done = '+a.done);
exports.done = true;
console.log('b module ends');

// main.js >> require('a.js'), require('b.js')