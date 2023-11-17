import fs from 'fs';
import fsp from 'fs/promises';
// synchronous - returns a Buffer - Binary form data
let buffer1 = fs.readFileSync('./myFile.txt', {encoding:'utf-8'});
console.log(`${buffer1}`);
// promise based
console.log('___ Promise based reading ________')
fsp.readFile('./myFile.txt', {encoding:'utf8'})
    .then(value => console.log(value));