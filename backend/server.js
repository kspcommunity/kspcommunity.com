const express = require('express');
const app = express();
require('dotenv').config();

// Dummy data for users
const users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Bob Johnson', age: 40 }
];

// Route to display all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
const port = process.env.API_PORT || 3001;
app.listen(port, () => {
  console.log(`API Server is listening on port ${port}`);
});
