import readline from 'readline-sync';
import { addTask, listTask } from './task-manager.js';
let option = 0;
do { 
    console.log(`****Todo**** \n 1: Add 2: List -1: Exit`)
    option = readline.questionInt('Enter your option: ');
    if(option == 1) {
        let task = {
            id: readline.questionInt('Enter id: '),
            date: readline.question('Enter date: '),
            task: readline.question('Enter task: ')
        }
        let status = addTask(task);
        if(status) {
            console.log('Task is added..');
        }
    }
    if(option == 2) {
        console.log(listTask());
    }
} while(option != -1);
console.log('Todo program exited!')