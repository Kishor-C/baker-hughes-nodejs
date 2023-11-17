import fs from 'fs';
function readFile(filename) {
    let data = fs.readFileSync(filename).toString();
    let arr = JSON.parse(data); // convert it into JS
    return arr; // return a javascript array
}
function writeFile(filename, tasks) { 
    let allTasks = readFile(filename);
    allTasks.push(tasks);
    fs.writeFileSync(filename, JSON.stringify(allTasks));
}
export function addTask(task) { 
    writeFile('./tasks.json', task);
    return true;
}
export function listTask() { 
    return readFile('./tasks.json');
}
export function deleteTask(id) { }