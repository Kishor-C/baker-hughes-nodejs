import fs from 'fs';
let counter = 0;
// highWaterMark to mention the size we want to stream
let read = fs.createReadStream(
    './myFile.txt', {highWaterMark: 10}
    );
read.on('data', (chunk) => {
    counter++;
    if(counter == 2) read.pause();
    setTimeout(() => {read.resume();}, 2000);
    console.log(`Streaming: ${chunk}`);
});