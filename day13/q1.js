const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

app.post('/api/data', (req, res) => {
  console.log('Received POST data:', req.body); 
  res.send({ message: 'Data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
