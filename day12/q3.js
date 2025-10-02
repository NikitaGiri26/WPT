
const fs = require('fs');


fs.writeFileSync('example.txt', 'Hello from synchronous method!');
console.log('File written synchronously.');


const data = fs.readFileSync('example.txt', 'utf8');
console.log('File read synchronously:', data);




