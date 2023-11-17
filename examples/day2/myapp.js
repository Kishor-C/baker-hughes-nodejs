import express from 'express';

let app1 = express();
let app2 = express();

app1.listen(8081, () => console.log('Running in 8081'));
app2.listen(8082, () => console.log('Running in 8082'));

let handler = serverName => (request, response) => {
    console.log(`Server:${serverName},URL: ${request.url}`)
    response.end(`Request handled by ${serverName}`)
};

app1.get('*', handler('a-instance'));
app2.get('*', handler('b-instance'));

