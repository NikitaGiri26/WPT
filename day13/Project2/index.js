const express = require('express');
const fs = require('fs');
const users1 = require('./MOCK_DATA.json');
const port = 3000;
const app = express();

app.use(express.json()); // To parse JSON bodies

// Root route
app.get('/', (req, res) => {
    res.send("Hello From Express");
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users1);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users1.findIndex(user => user.id === id);

    if (index !== -1) {
        const deletedUser = users1.splice(index, 1)[0];

        // Optional: persist changes to file
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users1, null, 2));

        res.json({ message: 'User deleted', user: deletedUser });
    } else {
        res.status(404).send('User not found');
    }
});

// Add new user
app.post('/users', (req, res) => {
    const { first_name, last_name, email } = req.body;
    const newUser = {
        id: users1.length + 1,
        first_name,
        last_name,
        email
    };

    users1.push(newUser);

    // Optional: persist changes to file
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users1, null, 2));

    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
