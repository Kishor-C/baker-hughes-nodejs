import {Employee, message, test, users} from './util.js';

// use their names as it is to work with it
let emp = new Employee(123, 'Raj', 90000);
console.log(emp.display());
// using arrays
let arr = users;
arr.forEach(item => console.log(item));
// calling test
test();
// using message without assignment
console.log(message);