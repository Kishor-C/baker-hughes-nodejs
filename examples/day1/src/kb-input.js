// importing a default module in readline-sync
import read from 'readline-sync';
// reading a text
let text = read.question('Enter a text: ');
// reading a number
let num = read.questionInt('Enter an int: ');
console.log(`Text: ${text}, Num = ${num}`);
// reading a password
let pass = read.questionNewPassword('Enter a password: ');
console.log(`Password = ${pass}`);
// reading an emailId
let email = read.questionEMail('Enter an emailId: ');
console.log(`Email = ${email}`)
