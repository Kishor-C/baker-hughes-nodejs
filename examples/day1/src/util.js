// exporting the class
export class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        return `Id = ${this.id}, Name = ${this.name}, Salary = ${this.salary}`;
    }
}
// exporting a function
export function test() {
    console.log('This is a test() fn.')
}
// exporting an object 
const message = {status:200, result:"HELLO"};
// exporting an array
const users = [
    {id:1, name:"Virat", phone:9999},
    {id:2, name:"Rohit", phone:8888}
];
// this is to export all the modules instead of writing 
// export on each module
export {users, message}