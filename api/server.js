const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to display all users
app.get('/api/users', (req, res) => {
  const filePath = path.join(__dirname, 'storage', 'users.json');
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

// Route to handle feedback submission
app.post('/api/feedback', (req, res) => {
  const feedback = req.body;
  // Assuming you want to store feedback in a file named 'feedback.json'
  const filePath = path.join(__dirname, 'storage', 'feedback.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading feedback.json:', err);
      return res.status(500).json({ error: 'Failed to read feedback data' });
    }
    let feedbackArray = [];
    try {
      feedbackArray = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing feedback.json:', parseErr);
      return res.status(500).json({ error: 'Failed to parse feedback data' });
    }
    feedbackArray.push(feedback);
    fs.writeFile(filePath, JSON.stringify(feedbackArray, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to feedback.json:', writeErr);
        return res.status(500).json({ error: 'Failed to save feedback' });
      }
      res.status(200).json({ message: 'Feedback submitted successfully' });
    });
  });
});

// SSL/TLS configuration
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'))
};

// Start the HTTPS server
const port = process.env.API_PORT || 3001;
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`Secure API Server is listening on port ${port}`);
});