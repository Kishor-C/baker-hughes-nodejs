import EventEmitter from 'events';
let eventEmitter = new EventEmitter();
// you can event multiple listeners for the same event
// they are executed in the order they appear
eventEmitter.on('message', (value) => console.log(value));
eventEmitter.on('message', (...value) => console.log(value));
eventEmitter.on('error', (...err) => console.log(err));
// lets emit an event using setTimeout
setTimeout(() => {
    eventEmitter.emit('message', 'Hello');
    eventEmitter.emit('message', 'Hello', 'All');
    try { throw 'Resource not found' } 
    catch(err) { eventEmitter.emit('error', err) }; 
}, 3000);
