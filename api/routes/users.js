const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Route to display all users
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'storage', 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading users.json:', err);
      return res.status(500).json({ error: 'Failed to read user data' });
    }
    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseErr) {
      console.error('Error parsing users.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse user data' });
    }
  });
});

module.exports = router;
