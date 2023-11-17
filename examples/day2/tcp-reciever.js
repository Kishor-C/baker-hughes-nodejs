import net from 'net'; 
// TCP servers are event based: data, end, connection
let counter = 0;
let server = net.createServer(client => {
    console.log('Connected...');
    counter++;// to track how many clients connected
    client.write(`Hello you're client no.: ${counter}`);
    client.on('data',(data)=>console.log(data.toString()))
    client.on('end', ()=>console.log('client disconn..'));
    // send data to the client
});
// starting the TCP server
server.listen(7777, () => 
    console.log('TCP Reciever is ready in :: 7777'));