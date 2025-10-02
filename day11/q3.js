
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from your Node.js server!\n');
});
const PORT = 8080;


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
