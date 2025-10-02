const express = require('express');
const path = require('path');
const app = express();

// Set view engine to hbs
app.set('view engine', 'hbs');

// Correct path to views folder (one level up from /app)
app.set('views', path.join(__dirname, '..', 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to render the form
app.get('/', (req, res) => {
  res.render('calc');
});

// Route to handle form submission
app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const result = num1 + num2;

  res.render('calc', { num1, num2, result });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
