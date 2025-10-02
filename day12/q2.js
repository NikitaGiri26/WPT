const express = require('express');
const app = express();
const port = 8080;


const todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Walk the dog', completed: true },
  { id: 3, task: 'Read a book', completed: false }
];


app.get('/todos', (req, res) => {
  res.json(todos);
});


app.get('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(t => t.id === todoId);


  if (todo) {
    res.send(`
      <h1>Todo Details</h1>
      <p><strong>ID:</strong> ${todo.id}</p>
      <p><strong>Task:</strong> ${todo.task}</p>
      <p><strong>Completed:</strong> ${todo.completed}</p>
    `);
  } else {
    res.status(404).send('<h1>Todo not found</h1>');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



