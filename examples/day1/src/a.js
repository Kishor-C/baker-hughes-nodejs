console.log('a module starts');
// we are trying to export done 
exports.done = false; 
let b = require('./b.js');
console.log('inside a module b.done = '+b.done);
exports.done = true;
console.log('a module ends');