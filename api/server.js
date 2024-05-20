const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Import route handlers
const usersRouter = require('./routes/users');
const feedbackRouter = require('./routes/feedback');

// Use route handlers
app.use('/api/users', usersRouter);
app.use('/api/feedback', feedbackRouter);

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
