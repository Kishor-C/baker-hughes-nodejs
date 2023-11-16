console.log('main module starts');
let a = require('./a.js'); 
// by the time above line executes a & b module both 
// will be already loaded 
let b = require('./b.js');
console.log('a.done in main = '+a.done);
console.log('b.done in main = '+b.done);
console.log('main module ends');
/* main module starts, a module starts, b module starts,
inside b module a.done = false, b module ends,
inside a module b.done = true, a module ends
a.done in main = true, b.done in main = true
*/