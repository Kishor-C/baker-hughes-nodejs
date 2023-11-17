// os-features.js
// importing os module
import os from 'os';
console.log(`Machine: ${os.machine()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`No. of cores: ${os.availableParallelism()}`);
console.log(`Type: ${os.type()}`);