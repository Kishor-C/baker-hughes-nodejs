import cluster from 'cluster';
import http from 'http';
import process from 'process';
import os from 'os';
let numCPUs = os.availableParallelism();
// const cluster = require('node:cluster');
// const http = require('node:http');
// const numCPUs = require('node:os').availableParallelism();
// const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello this is handled by ${process.pid}`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}