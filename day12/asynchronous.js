const fs = require('fs');


fs.writeFile('example_async.txt', 'Hello from asynchronous method!', (err) => {
  if (err) throw err;
  console.log('Asynchronous write complete.');


  fs.readFile('example_async.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Asynchronous read:', data);
  });
});
