const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Route to handle feedback submission
router.post('/', (req, res) => {
  const feedback = req.body;
  // Assuming you want to store feedback in a file named 'feedback.json'
  const filePath = path.join(__dirname, '..', 'storage', 'feedback.json');
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

module.exports = router;
