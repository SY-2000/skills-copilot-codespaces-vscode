// Create web server
// 1. Create a web server
// 2. Get the path
// 3. Read the file
// 4. Send the file

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create web server
const server = http.createServer(function(request, response) {
    // Get the path
    let pathname = url.parse(request.url).pathname;
    if (pathname === '/') {
        pathname = 'index.html';
    }
    // Read the file
    fs.readFile(path.join(__dirname, 'public', pathname), 'utf-8', function(err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>404 Not Found</h1>');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });
});

// Listen the port
server.listen(8080, function() {
    console.log('Server is running at port 8080.');
});