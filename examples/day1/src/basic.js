// exponential operator ** 
console.log(`3 ** 2 = ${3 ** 2}`);
console.log(`Math.pow(3, 2): ${Math.pow(3, 2)}`);
// area of a circle : Math.PI * Math.pow(radius, 2)
// with modern exponential operator : Math.PI * r ** 2
// destructuring the properties into a variable
let employee = {id: 100, name: "Alex", salary:35000};
let {id, name, salary} = employee;
console.log(`${id}, ${name}, ${salary}`);
// destructuring in built properties of Math
let {PI, E} = Math; // destructures Math.PI & E
console.log(`${PI}, ${E}`);

/* padStart and padEnd in strings - abcxxxx@gmail.com */
let testString = "9959";
let testStringOTP6 = testString.padStart(6, '0')
console.log(`6digitOTP = ${testStringOTP6}`);
let testStringOTP7 = testString.padEnd(7, '0');
console.log(`7digitOTP = ${testStringOTP7}`);
// generating random number of 6 digits // 0.00883838
let randomNumber = Math.ceil(Math.random() * 100000);
console.log(`Random number = ${randomNumber}`);
// converting number to strings
let randomString = ''+randomNumber; 
let s = new Number(randomNumber).toString();
/* spread & rest operators */
// rest parameter: can take 0 or more parameters
function sum(x, ...y) {
    // now y is an array: all the array methods works
    console.log(`x = ${x}, y = ${y}`)
    // forEach syntax: array.forEach(item => {})
    let sum = x;
    y.forEach((item) => {
        console.log(item); 
        sum = sum+item;
    }); // forEach() completes here
    console.log(`Sum = ${sum}`)
}
sum(2, 3, 1, 5, 6, 7);// x = 2, y = [3, 1, 5, 6, 7]
function query(x, y) {
    console.log(`x = ${x}, y = ${y}`)
}
let arrays1 = ["select * from table_name", 20];
// applying spread that assigns value in sequential order
query(...arrays1); // x = select query, y = 20
// applying filter, map & sort on an array

// simple arrays
let simpleItems = [5, 8, 1, 3, 2];
// filter only even numbers
let evenItems = simpleItems.filter(item => item%2==0);
console.log(`All Items = ${simpleItems}`);
console.log(`Even Items = ${evenItems}`);
// map to another value minus 50% for each value
let discountItems50 = 
    simpleItems.map(item => (item-(item*0.5)));
console.log(`Items with 50% = ${discountItems50}`);
// sort the elements - sorts based on -ve 0 +ve value
simpleItems.sort((x, y) => x - y);
//let sortedItemsD = simpleItems.sort((x, y) => y - x);
console.log(`Ascending = ${simpleItems}`);
simpleItems.sort((x, y) => y - x);
//let sortedItemsD = simpleItems.sort((x, y) => y - x);
console.log(`Descending = ${simpleItems}`);
// for strings you have an inbuilt compare function
let fooCompare = ["Hello", "hello", "HELLO"];
// string has a compare method that returns +ve, -ve, 0
// based on the ascii
fooCompare.sort((x, y) => y.localeCompare(x));
console.log(`String sort: ${fooCompare}`);
//try to filter a complex array with price between 10 & 20
let complexItems = [
    {name:"Acer", price: 5}, {name:"Acer", price:11},
    {name:"HP", price: 15}, {name:"HP", price:10},
    {name:"Dell", price: 8}, {name:"Dell", price:9}
];
/* Generators to yeild the data without completing function*/
function *fetchResult() {
    // Calling apis using axios, httpClient
    console.log('sends request => 1');
    yield 10;
    console.log('send request => 2');
    yield 20;
    console.log('send request => 3');
    yield 30;
}
let gen = fetchResult();
/* generator has a next() function which is an object
having value & done property */
let obj = gen.next();
console.log(obj);
obj = gen.next();
console.log(obj);
obj = gen.next();
console.log(obj);
obj = gen.next();
console.log(obj);

