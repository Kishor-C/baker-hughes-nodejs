import fs from 'fs';
import fsp from 'fs/promises';
//writing synchronously: writeFileSync(fn,d,options)
// {flag:'a+'} appends with the old content
fs.writeFileSync('./myFile.txt', 'Hello World\n', 
    {flag: 'a+'});
//writing asynchronously: writeFile(fn, d, op, cb)
fs.writeFile('./myFile.txt', 
    'Hello World Async\n', {flag: 'a+'}, (err) => {
        if(!err) console.log('File is written')
    }); // end of writeFile
//writing asynchronously using promise based methods
// writeFile(fn, d, op).then().catch()
fsp.writeFile('./myFile.txt', 
    'Hello World Promise\n', {flag: 'a+'})
    .then(() => console.log('Written using promise'))
    .catch(err => console.log(err));
