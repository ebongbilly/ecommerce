import http from 'node:http';
import fs from 'node:fs';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if(err) throw err;
        res.end(data);
    })
    
}).listen(8124);