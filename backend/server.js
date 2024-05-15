const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();

// Route to display all users
app.get('/api/users', (req, res) => {
  const filePath = path.join(__dirname, 'storage', 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users.json:', err);
      res.status(500).json({ error: 'Failed to read user data' });
      return;
    }
    const users = JSON.parse(data);
    res.json(users);
  });
});

// Start the server
const port = process.env.API_PORT || 3001;
app.listen(port, () => {
  console.log(`API Server is listening on port ${port}`);
});
