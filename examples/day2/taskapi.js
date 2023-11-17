import express from 'express';
import cors from 'cors';
import { addTask, listTask } from './task-manager.js';
let app = express(); // create a top-level express object
app.use(express.json()); // extracts json from request
app.use(cors()); // to enable cross-origin-resource-share
// HTTP GET
app.get('/task', (request, response) => {
    let allTasks = listTask();
    response.status(200).json(allTasks);
});
// HTTP POST
app.post('/task', (request, response) => {
    let body = request.body; // retruns data in req body
    let status = addTask(body);
    status ? 
        response.status(201).json({"message":"Stored!"})
        : response.status(400).json({"error":"Not stored"})
});
app.listen(8888, () => console.log('Running in 8888'));