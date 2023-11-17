import net from 'net';
import readline from 'readline-sync';
let client = new net.Socket();
let message = '';
client.connect(7777, 'localhost', () => {
    do {
        message = readline.question('Type a message: ');
        client.write(message);
    } while(message != 'quit');
    client.destroy(); // close the client 
});
client.on('data', (data) => 
    console.log(`Server Sent: ${data.toString()}`))
client.on('close', () => console.log('Disconnected..'))