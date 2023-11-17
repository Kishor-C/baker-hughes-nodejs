import http from 'http';
import https from 'https';
import url from 'url';
// http server - callback(request, response)
let server = http.createServer((req, res) => {
    let url2 = url.parse(req.url, true);
    let query = url2.query;
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('Hello this is from the server: ');
    res.write(`Name: ${query.name}, `);
    res.write(`Age: ${query.age}, `);
    res.write(`Phone: ${query.phone}`)
    res.end(); // end writing the content
    // npm i -g nodemon >> nodemon myserver.js
});
server.listen(9999, 
    () => console.log('Server started at 9999'));
